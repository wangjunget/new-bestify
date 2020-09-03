import Alert from '../packages/alert/index'
import Button from '../packages/button/index'
import Upload from '../packages/upload/index'
import Prograss from '../packages/prograss/index'
import Image from '../packages/image/index'
<<<<<<< HEAD
import Verify from '../packages/verify/index'
import './font/iconfont'
=======
import './font/iconfont.css'
>>>>>>> 7b34d8e17315a47fb70670c46df3bc9ba3966300

const components = [Alert, Upload, Prograss, Image, Button, Verify]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install // 暴露install方法，用于Vue注册
}