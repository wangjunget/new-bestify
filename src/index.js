import Alert from '../packages/alert/index'

const components = [ Alert ]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install // 暴露install方法，用于Vue注册
}