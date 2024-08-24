const gulp = require('gulp');
const del = require('del');
const { src } = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');

// 删除es,lib,dist 包
gulp.task('clean', async function () {
  await del('es/**');
  await del('lib/**');
  await del('dist/**');
});

// 生成es 包, 浏览器环境, ts -->  esnext  --> es/
gulp.task('es', function () {
  const tsProject = ts.createProject('./tsconfig.pro.json', { module: 'ESNext' });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 生成cjs包，node 环境, js --> lib/
gulp.task('cjs', function () {
  return src(['./es/**/*.js'])
    .pipe(babel({ configFile: '../../.babelrc' }))
    .pipe(gulp.dest('lib/'));
});

// 生成declaration文件
gulp.task('declaration', function () {
  const tsProject = ts.createProject('./tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('lib/')).pipe(gulp.dest('es/')); //
});

// 生成 readme文件
gulp.task('readme', async function () {
  src(['../../README.md']).pipe(gulp.dest('./'));
});

exports.default = gulp.series('clean', 'es', 'cjs', 'declaration', 'readme');
