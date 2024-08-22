const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const fs = require('fs');
const fse = require('fs-extra');
const fg = require('fast-glob');
const gm = require('gray-matter');

function genDesc(path) {
  if (!fs.existsSync(path)) {
    return 'undefind';
  }
  const mdFile = fs.readFileSync(path, 'utf8');
  const { content } = gm(mdFile);
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';
  description = description.trim();
  description = description.charAt(0).toUpperCase() + description.slice(1);
  return description;
}

async function genMetaData() {
  const metadata = { functions: [] };

  const hooks = fg
    .sync('src/use*', { onlyDirectories: true })
    .map((hook) => hook.replace('src/', ''))
    .sort();

  await Promise.allSettled(
    hooks.map(async (hook) => {
      const description = await genDesc(`src/${hook}/index.md`);
      return { name: hook, description };
    }),
  ).then((res) => {
    metadata.functions = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }
      return null;
    });
  });

  return metadata;
}

gulp.task('metadata', async function () {
  const metadata = await genMetaData();
  await fse.writeJson('metadata.json', metadata, { space: 2 });
});

exports.default = gulp.series(commonConfig.default, 'metadata');
