import directive from './src/directive'
import service from './src/index'
import XLoading from './src/loading'

XLoading.install = function (Vue) {
  // 自定义指令
  Vue.use(directive)
  Vue.component(XLoading.name, XLoading);

  // 绑定原型方法
  Vue.prototype.$loading = service
}

export default XLoading
