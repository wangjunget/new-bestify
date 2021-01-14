<template>
  <div
    class="nb-image"
    :class="[circle ? 'nb-image--circle' : '']"
    style="width: 100px; height: 100px"
  >
    <slot name="error" v-if="error">
      <div>error</div>
    </slot>
    <slot name="loading" v-else-if="loading">
      <div class="nb-image-loading">loading</div>
    </slot>
    <img
      :src="src"
      :alt="alt"
      :style="imgStyle"
      class="nb-image__inner"
      @click="showPreview"
      v-else
    />
    <image-viewer
      v-if="isShowPreviewList"
      :on-close="hidePreview"
      :preview-list="previewList"
      :src="src"
    />
  </div>
</template>

<script>
import ImageViewer from "./image-preview";
export default {
  name: "NbImage",
  components: { ImageViewer },
  props: {
    src: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "cover",
      validator: (t) => {
        const acceptTypes = ["fill", "contain", "cover", "none", "scale-down"];
        return acceptTypes.includes(t);
      },
    }, //图片适应方式
    circle: {
      type: Boolean,
      default: false,
    },
    previewList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    alt: {
      type: String,
      default: "test",
    },
  },
  mounted() {
    this.loadImage();
  },
  data() {
    return {
      isShowPreviewList: false,
      loading: false,
      error: false,
    };
  },
  computed: {
    imgStyle() {
      let style = {
        "object-fit": this.type,
      };
      return style;
    },
  },
  methods: {
    showPreview() {
      this.isShowPreviewList = true;
    },
    hidePreview() {
      this.isShowPreviewList = false;
    },
    loadImage(val) {
      this.loading = true;
      const img = new Image();
      img.src = this.src;
      img.onerror = (e) => {
        this.loading = false;
        this.error = true;
      };
      img.onload = (e) => {
        this.loading = false;
      };
    },
  },
};
</script>

<style lang="scss" src="../../../theme/image.scss">
</style>