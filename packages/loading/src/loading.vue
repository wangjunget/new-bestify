<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <div
      v-show="visible"
      class="nb-loading"
    >
      <div class="nb-loading-content">
        <img
          v-if="img"
          :src="img"
          :style="{width: `${imgSize}px`, height: `${imgSize}px`}"
        >
        <div
          v-else
          class="point-wrap"
        >
          <div
            class="point point1"
            :style="{width: `${iconSize}px`, height: `${iconSize}px`, backgroundColor: iconColor}"
          />
          <div
            class="point point2"
            :style="{width: `${iconSize}px`, height: `${iconSize}px`, backgroundColor: iconColor}"
          />
          <div
            class="point point3"
            :style="{width: `${iconSize}px`, height: `${iconSize}px`, backgroundColor: iconColor}"
          />
        </div>
        <p
          v-if="text"
          class="nb-loading-text"
          :style="{color: color}"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      text: null,
      // 测试用img
      img: 'https://img.lanrentuku.com/img/allimg/1212/5-121204193951.gif'
    }
  },

  methods: {
    setText (text) {
      this.text = text
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../../theme/loading.scss');
.nb-loading{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba($color: #fff, $alpha: .8);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  &-content{
    width: 100px;
    height: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    img{
      object-fit: cover;
    }
  }
  &-text{
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
  .point-wrap {
    margin: 0 auto;
    text-align: center;
    .point {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 5px;
      border-radius: 50%;
      animation: loading 1s infinite;
    }
    /* 设置延迟 */
    .point1 {
      animation-delay: -0.3s;
    }
    .point2 {
      animation-delay: -0.15s;
    }
    .point3 {
      animation-delay: 0;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 自定义动画帧 */
@keyframes loading {
  0% { transform: scale(0) }
  50% { transform: scale(1) }
  90% { transform: scale(0) }
  100% { transform: scale(0) }
}
</style>
