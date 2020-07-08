<template>
   <div class="demo">
     <slot></slot>
   </div>
</template>

<script>
export default {
   name: 'demo-block'
}
</script>

<style scoped lang="scss">
.demo {
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
}
</style>