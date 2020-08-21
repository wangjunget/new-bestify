<template>
  <transition name="scale">
    <div class="nb-image-viewer__wrapper">
      <div class="nb-image-viewer__mask"></div>
      <span class="nb-image-viewer__btn nb-image-viewer__prev" @click.stop="prev">
        <i class="iconfont nbhoutui-copy"></i>
      </span>
      <span class="nb-image-viewer__btn nb-image-viewer__next" @click="next">
        <i class="iconfont nbhoutui-copy1"></i>
      </span>
      <span class="nb-image-viewer__btn nb-image-viewer__close" @click="hide">
        <i class="iconfont nbguanbi"></i>
      </span>
      <div class="nb-image-viewer__content">
        <img :src="previewList[index]" alt class="nb-image-viewer__img" />
      </div>
    </div>
  </transition>
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
    },
    onClose: {
      type: Function,
      default: () => {}
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
  },
  methods: {
    prev() {
      this.index--;
      if (this.index < 0) this.index = this.previewList.length - 1;
    },
    next() {
      this.index++;
      if (this.index > this.previewList.length - 1) this.index = 0;
    },
    hide() {
      this.onClose();
    }
  }
};
</script>

<style>
@import "../../../src/font/iconfont.css";
</style>