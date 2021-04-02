import Alert from '../packages/alert/index'
import Button from '../packages/button/index'
import Upload from '../packages/upload/index'
import Prograss from '../packages/prograss/index'
import Image from '../packages/image/index'
import Icon from '../packages/icon/index'
import Verify from '../packages/verify/index'
import Pagination from '../packages/pagination/index'
import Badge from '../packages/badge/index'
import Checkbox from '../packages/checkbox/index'
import './font/iconfont.css'

const components = [Alert, Upload, Prograss, Image, Icon, Button, Verify, Pagination,Badge,Checkbox]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install, // 暴露install方法，用于Vue注册
  Alert,
  Button,
  Upload,
  Prograss,
  Image,
  Icon,
  Verify,
  Pagination,
  Badge,
  Select
}