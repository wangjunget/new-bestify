<template>
  <transition name="scale">
    <div class="nb-image-viewer__wrapper">
      <div class="nb-image-viewer__mask" />
      <span
        class="nb-image-viewer__btn nb-image-viewer__prev nb-icon houtui-copy"
        @click.stop="prev"
      >
        <i class="iconfont nbhoutui-copy" />
      </span>
      <span
        class="nb-image-viewer__btn nb-image-viewer__next nb-icon houtui-copy1"
        @click="next"
      >
        <i class="iconfont nbhoutui-copy1" />
      </span>
      <span
        class="nb-image-viewer__btn nb-image-viewer__close nb-icon guanbi"
        @click="hide"
      >
        <i class="iconfont nbguanbi" />
      </span>
      <div class="nb-image-viewer__content">
        <img
          :src="previewList[index]"
          alt
          class="nb-image-viewer__img"
        >
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
      default: ""
    },
    onClose: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      index: 0
    };
  },
  created() {
    if (this.previewList.includes(this.src)) {
      this.index = this.previewList.indexOf(this.src);
    }
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