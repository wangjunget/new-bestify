module.exports = {
  title: 'NB-UI',
  base: '/nb-ui/',
  plugins: [
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-container',
      {
        type: 'demo',
        before: () => `<div class="demo">`,
        after: '</div>',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: '介绍', link: '/' },
      {
        text: '组件', link: '/components/'
      }
    ],
    sidebarDepth: 0,
    sidebar: {
      '/components/': ['alert', 'button']
    }
  }
}
