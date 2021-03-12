### verify

常用的操作。

### 基本用法

样式调整

:::demo
```html
<template>
  <nb-verify
    text="请滑动王俊至右边"
    width="500"
    height="50"
    successText="成功了"
    background="#409eff"
    progressBarBg="#67c23a"
    completedBg="#f56c6c"
    radius="10px"
    handlerBg="#e6a23c"
    textSize="20px"
    textColor="#f09870"
  />
</template>
<!-- <script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      reset(){
        this.isPass
      }
    }
  }
</script> -->
```
:::

事件

:::demo
```html
<template>
  <nb-verify
    text="请滑动王俊至右边"
    :isPassing.sync="isPassing"
    @passcallback="passcallback"
    successText="验证通过"
    ref="dragVerify"
    @clikc="fuffu"
  />
  <br/>
  <!-- <nb-button @click="reset" type="primary" text="重置"/> -->
</template>
<script>
  export default {
    data(){
      return{
        isPassing:false,
      }
    },
    methods:{
      reset(){
        this.isPassing = false;
        this.$refs.dragVerify.reset();
      },
      passcallback(){
        console.log("验证成功")
      },
      fuffu() {
        console.log("fu1")
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| isPassing     |      是否通过     | boolean | — | false |
| width | - | string/number |  | |
| height | - | string/number | — | — |
| text | - | string | — |  |
| successText | - | string | — | - |
| background | - | string | — | — |
| progressBarBg | 滑动时背景 | string | - | - |
| completedBg | 成功背景 | string | true/false | flase |
| circle | - | boolean | true/false | flase |
| radius | - | string | - | 4px |
| handlerIcon | 滑块上icon | string | - | - |
| successIcon | - | string | - | - |
| handlerBg | 滑块颜色 | string | - | - |
| textSize | - | string | - | - |
| textColor | - | string | - | - |
| animationColor | 划过动画的颜色 | string | - | #000 |
| successTextColor | 成功字体颜色 | string | - | #000 |

### Methods

| 方法名     | 说明          |
|---------- |-------------- |
| passcallback     |      通过函数     |
| reset     |      重置     |
