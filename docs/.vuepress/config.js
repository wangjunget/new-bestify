module.exports = {
  title: 'NB-UI',
  plugins: [
    ['@vuepress/back-to-top']
  ],
  themeConfig: {
    repo: 'wangjunget/blog-vuepress',
    editLinkText: '编辑此页',
    lastUpdated: '最近更新',
    // head: [['link', { rel: 'icon', href: './public/favicon.ico' }]],
    nav: [
      { text: '主页', link: '/' },
      {
        text: '分类', link: '/category'
      },
      { text: '关于', link: '/about'}
    ],
    sidebarDepth: 2,
    // sidebar: sidebarConfig
  }
}
