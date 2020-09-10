<template>
  <button
    class="NB-button"
    :class="[
      type ? 'NB-button--' + type : '',
      {
        'NB-disabled': disabled,
        'NB-loading': loading,
        'NB-plain': plain,
        'NB-round': round,
        'NB-circle':circle,
      }
    ]"
    :style="{
      height : height ? height + 'px' : '',
      width : width ? width + 'px' : '',
      backgroundColor : backgroundColor ? backgroundColor : '',
      color : color ? color : '',
      border : border ? border : '',
      borderRadius : borderRadius ? borderRadius + 'px' : '',
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <i
      v-if="loading"
      class="nb-icon loading"
    />
    <!-- <i :class="'iconfont icon-' + icon" v-if="icon && !loading"></i> -->
    <span v-if="text">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "NbButton",
  props: {
    width: {
      type: [String, Number],
      required: false,
      default: ''
    },
    height: {
      type: [String, Number],
      required: false,
      default: ''
    },
    backgroundColor: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: ''
    },
    border: {
      type: [String, Number],
      required: false,
      default: ''
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: ''
    },
    type: {
      type: String,
      default: "default",
      required: false
    },
    plain: {
      type: Boolean,
      default: false,
      required: false
    },
    circle: {
      type: Boolean,
      default: false,
      required: false
    },
    round: {
      type: Boolean,
      default: false,
      required: false
    },
    loading: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    autofocus: {
      type: Boolean,
      default: false,
      required: false
    },
    text: {
      type: String,
      default: "WJNB",
      required: false
    }
    // icon:{
    //   type:String,
    //   default:'',
    //   required:false,
    // }
  },
  mounted() {
    console.log(this);
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang='scss' scoped>
.NB-button {
  display: inline-block;
  width: 98px;
  height: 40px;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
}

.NB-button.NB-button--primary {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}

.NB-button.NB-button--success {
  background: #67c23a;
  color: #fff;
  border-color: #67c23a;
}

.NB-button.NB-button--info {
  background: #909399;
  color: #fff;
  border-color: #909399;
}

.NB-button.NB-button--warning {
  background: #e6a23c;
  color: #fff;
  border-color: #e6a23c;
}

.NB-button.NB-button--danger {
  background: #f56c6c;
  color: #fff;
  border-color: #f56c6c;
}
.NB-button.NB-button--text {
  border:none;
  background:none;

}

.NB-button.NB-button--primary.NB-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}

.NB-button.NB-button--success.NB-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}

.NB-button.NB-button--info.NB-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}

.NB-button.NB-button--warning.NB-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}

.NB-button.NB-button--danger.NB-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}

.NB-button.NB-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

.NB-button.NB-button--primary.NB-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.NB-button.NB-button--success.NB-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.NB-button.NB-button--info.NB-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

.NB-button.NB-button--warning.NB-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.NB-button.NB-button--danger.NB-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.NB-round {
  border-radius: 20px;
}

.NB-circle {
  width: 40px;
  border-radius: 50%;
}

.loading {
  display: inherit;
  -webkit-transform: rotate(360deg);
  animation: rotation 2s linear infinite;
  -moz-animation: rotation 2s linear infinite;
  -webkit-animation: rotation 2s linear infinite;
  -o-animation: rotation 2s linear infinite;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
