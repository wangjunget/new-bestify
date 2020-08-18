const path = require('path');

module.exports = {
  title: 'NB-UI',
  base: '/nb-ui/',
  plugins: [
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-container',
      {
        type: 'demo',
        before: () => '<demo-block>',
        after: '</demo-block>',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: '介绍', link: '/' },
      {
        text: '组件',
        link: '/components/',
      },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/components/': ['alert', 'button', 'upload'],
    },
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@theme', path.resolve(__dirname, '../../', 'theme')); //TODO alias未生效
  }
}
