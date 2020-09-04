<template>
  <div class="nb-prograss" :class="[type == 'circle' ? 'nb-prograss--circle': '']">
    <div class="prograssbar" :style="{width: width + 'px'}" :class="status ? 'is-'+ status : ''">
      <div class="nb-prograss-bar" v-if="type === 'line'">
        <div class="nb-prograss-bar__outer" :style="{height: strokeWidth + 'px'}">
          <div class="nb-prograss-bar__inner" :style="barStyle">
            <span v-if="textInside" :style="{fontSize: progressTextSize + 'px'}">{{content}}</span>
          </div>
        </div>
      </div>
      <div
        class="nb-progress-circle"
        :style="{height: width + 'px', width: width + 'px'}"
        v-if="type === 'circle'"
      >
        <svg viewBox="0 0 100 100">
          <path
            class="nb-progress-circle__track"
            :d="trackPath"
            stroke="#e5e9f2"
            :stroke-width="relativeStrokeWidth"
            fill="none"
            :style="trailPathStyle"
          />
          <path
            class="nb-progress-circle__path"
            :d="trackPath"
            :stroke="stroke"
            fill="none"
            stroke-linecap="round"
            :stroke-width="value ? relativeStrokeWidth : 0"
            :style="circlePathStyle"
          />
        </svg>
      </div>
      <div
        class="nb-prograss__text"
        v-if="!textInside"
        :style="{fontSize: progressTextSize + 'px'}"
      >{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NbPrograss",
  props: {
    value: {
      type: [Number, String],
      default: 0,
      validator: t => !isNaN(t)
    },
    type: {
      type: String,
      default: "line"
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 300
    },
    status: {
      type: String,
      default: "exception"
    },
    strokeWidth: {
      type: Number,
      default: 8
    },
    format: Function
  },
  computed: {
    barStyle() {
      const style = {};
      style.width = this.value + "%";
      return style;
    },
    progressTextSize() {
      return this.type === "line"
        ? 12 + this.strokeWidth * 0.2
        : this.width * 0.111111 + 2;
    },
    content() {
      if (typeof this.format === "function") {
        return this.format(this.value) || "";
      } else {
        return `${this.value}%`;
      }
    },

    relativeStrokeWidth() {
      return ((this.strokeWidth / this.width) * 100).toFixed(1);
    },
    radius() {
      if (this.type === "circle" || this.type === "dashboard") {
        return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
      } else {
        return 0;
      }
    },
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    rate() {
      return this.type === "dashboard" ? 0.75 : 1;
    },
    trackPath() {
      const radius = this.radius;
      const isDashboard = this.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${radius}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? "-" : ""}${radius * 2}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? "" : "-"}${radius * 2}
          `;
    },
    strokeDashoffset() {
      const offset = (-1 * this.perimeter * (1 - this.rate)) / 2;
      return `${offset}px`;
    },
    trailPathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rate}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset
      };
    },
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter *
          this.rate *
          (this.value / 100)}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
      };
    },
    stroke() {
      let ret;
      switch (this.status) {
        case "success":
          ret = "#13ce66";
          break;
        case "exception":
          ret = "#ff4949";
          break;
        case "warning":
          ret = "#e6a23c";
          break;
        case "danger":
          ret = "#f56c6c";
          break;
        default:
          ret = "#3eaf7c";
      }
      return ret;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" src="../../../theme/prograss.scss">
</style>