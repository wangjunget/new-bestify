import Alert from '../packages/alert/index'
import Upload from '../packages/upload/index'

const components = [Alert, Upload]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install // 暴露install方法，用于Vue注册
}