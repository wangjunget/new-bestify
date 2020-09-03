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
  />
  <br/>
  <nb-button @click="reset" text="重置"/>
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
      }
    }
  }
</script>
```
:::