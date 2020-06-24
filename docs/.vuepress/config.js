module.exports = {
  title: 'NB-UI',
  plugins: [
    ['@vuepress/back-to-top']
  ],
  themeConfig: {
    // repo: 'wangjunget/blog-vuepress',
    // editLinkText: '编辑此页',
    // lastUpdated: '最近更新',
    // head: [['link', { rel: 'icon', href: './public/favicon.ico' }]],
    nav: [
      { text: '介绍', link: '/' },
      {
        text: '组件', link: '/components/'
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/components/': ['alert', 'button']
    }
  }
}
