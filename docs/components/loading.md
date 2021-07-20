# Loading 加载

加载数据时显示动效。

### 基本用法

:::demo
```html
  <template>
    <div>
      <nb-button @click="openGlobalLoading">打开loading</nb-button>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        partLock: false,
        vLoading: false
      }
    },

    methods: {
      openGlobalLoading () {
        console.log('openGlobalLoading')
        const loading = this.$loading()

        setTimeout(function () {
          loading.close()
        }, 3000)
      },
    }
  }
  </script>
```
:::

### 局部Loading

:::demo
```html
  <template>
    <div>
      <nb-button @click="openPartLoading">打开loading</nb-button>
      <div class="part-loading-box" style="width: 300px; height: 200px; border: 1px solid #eee; border-radius: 4px; margin-top: 20px;"></div>
    </div>
  </template>

  <script>
  export default {
    methods: {
      openPartLoading () {
        console.log('openPartLoading')
        const loading = this.$loading({
          text: '这是局部loading',
          target: '.part-loading-box'
        })
        setTimeout(function () {
          loading.close()
        }, 3000)
      }
    }
  }
  </script>
```
:::

### directive自定义指令Loading

:::demo
```html
  <template>
    <div>
      <nb-button @click="VLoading = true">打开loading</nb-button>
      <nb-button @click="VLoading = false">关闭loading</nb-button>
      <div class="part-loading-box" v-loading="VLoading" style="width: 300px; height: 200px; border: 1px solid #eee; border-radius: 4px; margin-top: 20px;"></div>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        VLoading: false,
      }
    },
  }
  </script>
```
:::

### Attributes
| 参数        | 说明           | 类型  | 可选值  | 默认值  |
| ------------- |:-------------:| -----:|-----:|-----:|
| text     | loading的文字 | string | - | - |
| color   | loading的文字颜色      |   string | - | #ccc |
| iconSize   | 小球的直径大小      |   number | - | 15 |
| iconColor | 小球的颜色      |    string | - | #BA2126 |
| img | 是否替换成图片      |    string | - | - |
| imgSize | 图片的大小      |    number | - | 40 |
| target | 需要挂载的位置      |    string | - | - |


### 指令模式标签属性 Attributes
| 参数        | 说明           | 类型  | 可选值  | 默认值  |
| ------------- |:-------------:| -----:|-----:|-----:|
| nb-loading-text     | loading的文字 | string | - | - |
| nb-loading-text-color   | loading的文字颜色      |   string | - | #ccc |
| nb-loading-icon-size   | 小球的直径大小      |   number | - | 15 |
| nb-loading-icon-color | 小球的颜色      |    string | - | #BA2126 |
| nb-loading-img | 是否替换成图片      |    string | - | - |
| nb-loading-img-size | 图片的大小      |    number | - | 40 |


## 方法
| 事件名称        | 说明           | 回调参数  |
| ------------- |:-------------:| -----:|
| close     | 关闭loading | - |

