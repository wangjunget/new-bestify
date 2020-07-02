import Alert from '../../packages/alert'
require('https://at.alicdn.com/t/font_1917499_7lcekupmjw6.css')

const components = [Alert]

/**
 * 注册全局组件
 */
function registerComponents(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  registerComponents(Vue)
}
