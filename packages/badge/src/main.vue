<template>
  <div class="nb-badge">
    <NbButton text="天降正义"/>
    <div
      class="nb-badge-number"
      :class="type ? 'nb-badge-number--' + type : ''"
      :style="{
        color: color ? color : '',
        backgroundColor: backgroundColor ? backgroundColor : '',
      }"
    >
      <span v-if="type != 'spot'">
        {{ valueFormat(text) }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "nb-badge",
  props: {
    type: {
      type: String,
      default: "",
      required: false,
    },
    text: {
      type: String,
      default: "1",
      required: false,
    },
    maxValue: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: "",
    },
    backgroundColor: {
      type: String,
      required: false,
      default: "",
    },

  },
  methods: {
    valueFormat(text) {
      var numReg = /^[0-9]*$/;
      var numRe = new RegExp(numReg);
      if (numRe.test(text)) {
        if (this.maxValue && text > this.maxValue) {
          return this.maxValue + "+";
        }
      }
      return text;
    },
  },
};
</script>
<style lang='scss' scoped>
.nb-badge {
  display: inline-block;
  margin-right: 20px;
  .nb-badge-number {
    display: inline-block;
    border:#ffffff 1px solid;
    background-color: rgb(184, 34, 34);
    color: #ffffff;
    border-radius: 25px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    padding: 0 8px;
    transform: translateY(-100%) translateX(-50%);
  }
  .nb-badge-number.nb-badge-number--spot {
    display: inline-block;
    position: absolute;
    background-color: rgb(226, 7, 7);
    border-radius: 25px;
    height: 10px;
    width: 10px;
    padding: 0;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>