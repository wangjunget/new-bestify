import Alert from '../packages/alert/index'
import Upload from '../packages/upload/index'
import Prograss from '../packages/prograss/index'
import Image from '../packages/image/index'
import Pagination from '../packages/pagination/index'

const components = [Alert, Upload, Prograss, Image, Pagination]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install // 暴露install方法，用于Vue注册
}