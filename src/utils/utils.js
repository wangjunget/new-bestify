// 将文本中的换行符\n转为页面真正的换行显示
export function transformLineBreak(val) {
  return val.split('\n').join('<br/>')
}

// 价格处理
export function GetCheckPrice($event) {
  return ($event.match(/^\d*(\.?\d{0,2})/g)[0]) || null
}

// 数字处理
export function GetCheckNumber($event) {
  return $event.replace(/\D/g, '') || null
}

// 添加类名
export function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

// 移除类名
export function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i]
      if (!clsName) continue

      if (el.classList) {
      el.classList.remove(clsName)
      } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
  }
  if (!el.classList) {
      el.className = trim(curClass)
  }
}

// 是否含有类名
export function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
      return el.classList.contains(cls)
  } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

// 查询是否含有某个子节点
export function isChildOf(child, parent) {
  var parentNode;
  if(child && parent) {
      parentNode = child.parentNode;
      if(parent === parentNode) return true;
  }
  return false;
}

// 去除空格
var trim = function trim (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
