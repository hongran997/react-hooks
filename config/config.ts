import { menus } from './hooks';

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  publicPath: '/react-hooks-host/',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  title: 'React hooks',
  mode: 'site',
  favicon: '/react-hooks-host/avatar.png',
  logo: '/react-hooks-host/avatar.png',
  manifest: {},
  hash: true,
  alias: {
    encodeHooks: process.cwd() + '/packages/hooks/src/index.ts',
    ['encode-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/react-hooks-host/style.css' },
  ],
  navs: [
    { title: '指南', path: 'guide' },
    { title: 'Hooks', path: '/hooks' },
    { title: 'GitHub', path: 'https://github.com/hongran997/react-hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: 'guide',
      },
    ],
    '/hooks': menus,
  },
};
