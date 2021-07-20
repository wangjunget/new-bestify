import Vue from 'vue'
import loadingVue from './loading.vue'
import { addClass, removeClass, isChildOf } from '../../../src/utils/utils'

const LoadingConstructor = Vue.extend(loadingVue)

const defaults = {
  visible: false,
  text: null,
  color: '#ccc',
  iconSize: 15,
  iconColor: '#BA2126',
  img: '',
  imgSize: 40,
  target: null
}

const Loading = (options = {}) => {
  options.target = typeof options.target === 'string' ? document.querySelector(options.target) : document.body
  defaults.target = options.target
  if (isChildOf(document.querySelector('.nb-loading'), defaults.target)) return false
  options = Object.assign({}, defaults, options)
  const instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  })
  instance.close = function () {
    this.visible = false
    setTimeout(() => {
      if (options.target === document.body) {
        removeClass(options.target, 'nb-loading-parent--body')
      } else {
        removeClass(options.target, 'nb-loading-parent')
      }
      options.target.removeChild(this.$el)
    }, 300)
  }
  if (options.target === document.body) {
    instance.$el.style.position = 'fixed'
    addClass(options.target, 'nb-loading-parent--body')
  } else {
    addClass(options.target, 'nb-loading-parent')
  }
  options.target.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  return instance
}

export default Loading
