<template>
  <div class="nb-image-viewer__wrapper">
    <div class="nb-image-viewer__mask"></div>
    <span class="nb-image-viewer__btn nb-image-viewer__prev">
      <i class="iconfont nbhoutui-copy"></i>
    </span>
    <span class="nb-image-viewer__btn nb-image-viewer__next">
      <i class="iconfont nbhoutui-copy1"></i>
    </span>
    <span class="nb-image-viewer__btn nb-image-viewer__close">
      <i class="iconfont nbguanbi"></i>
    </span>
    <div class="nb-image-viewer__content">
      <img :src="previewList[index]" alt class="nb-image-viewer__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NbImageViewer",
  props: {
    previewList: {
      type: Array,
      default: () => {}
    },
    src: {
      type: String,
      dafault: ""
    }
  },
  created() {
    if (this.previewList.includes(this.src)) {
      this.index = this.previewList.indexOf(this.src);
    }
  },
  data() {
    return {
      index: 0
    };
  }
};
</script>

<style>
@import "../../../src/font/iconfont.css";
</style>