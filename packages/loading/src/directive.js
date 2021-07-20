import Vue from 'vue'
import Loading from './loading.vue'
import { addClass, removeClass } from '../../../src/utils/utils'
const Instance = Vue.extend(Loading)

const loadingDirective = {}

let defaults = {
  visible: false,
  text: null,
  color: '#ccc',
  iconSize: 15,
  iconColor: '#BA2126',
  img: '',
  imgSize: 40
}

loadingDirective.install = Vue => {
  Vue.directive('loading', {
    bind: (el, params) => {
      if (typeof params.value !== 'boolean') return console.error('v-loading请传入布尔值')
      const getParams = {
        visible: params.value,
        text: el.getAttribute('nb-loading-text'),
        color: el.getAttribute('nb-loading-text-color') ? el.getAttribute('nb-loading-text-color') : '#ccc',
        iconSize: el.getAttribute('nb-loading-icon-size') ? el.getAttribute('nb-loading-icon-size') : 15,
        iconColor: el.getAttribute('nb-loading-icon-color') ? el.getAttribute('nb-loading-icon-color') : '#BA2126',
        img: el.getAttribute('nb-loading-img'),
        imgSize: el.getAttribute('nb-loading-img-size') ? el.getAttribute('nb-loading-img-size') : 40
      }
      defaults = Object.assign({}, defaults, getParams)
      const instance = new Instance({
        el: document.createElement('div'),
        data: defaults
      })

      // 绑定close事件
      instance.close = function () {
        this.visible = false
        setTimeout(() => {
          el.removeChild(el.$loading.$el)
          removeClass(el, 'nb-loading-parent')
        }, 300)
      }

      el.$loading = instance
      if (params.value) {
        el.appendChild(instance.$el)
        addClass(el, 'nb-loading-parent')
      }
      Vue.nextTick(() => {
        instance.visible = params.value
      })
      return instance
    },

    update: (el, params) => {
      if (typeof params.value !== 'boolean') return console.error('v-loading请传入布尔值')
      if (params.value) {
        el.appendChild(el.$loading.$el)
        addClass(el, 'nb-loading-parent')
        Vue.nextTick(() => {
          el.$loading.visible = true
        })
      } else {
        if (el === el.$loading.$el.parentNode) el.$loading.close()
      }
    }
  })
}

export default loadingDirective
