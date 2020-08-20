<template>
  <div
    class="nb-image"
    :class="[ circle ? 'nb-image--circle' : '']"
    style="width: 100px; height: 100px"
  >
    <img :src="src" alt="test" :style="imgStyle" class="nb-image__inner" />
    <image-viewer
      :previewList="['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']"
    ></image-viewer>
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
      default:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    },
    type: {
      type: String,
      default: "cover",
      validator: t => {
        const acceptTypes = ["fill", "contain", "cover", "none", "scale-down"];
        return acceptTypes.includes(t);
      }
    }, //图片适应方式
    circle: {
      type: Boolean,
      default: false
    },
    previewList: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    imgStyle() {
      console.log(this.type);
      let style = {
        "object-fit": this.type
      };
      return style;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" src="../../../theme/image.scss">
</style>