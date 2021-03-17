<template>
  <div class="d_checkbox">
    <div class="checkbox_label" :style="labelStyle">
      {{ label }}
    </div>
    <div class="checkbox_buttons">
      <template v-if="handleData.length > 0">
        <template v-for="(item, index) in handleData">
          <button
            class="checkbox_buttons_item"
            :key="index[valueKey]"
            :class="[
              item.isActive ? '_active' : '',
              item.isAline ? 'is_aline' : '',
            ]"
            @click="handelClick(item, index)"
          >
            {{ item[dsplayValue] }}
          </button>
        </template>
      </template>
      <template v-else>
        <p class="no_data">无数据</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "nb-checkbox",
  data() {
    return {
      activeArray: [],
      handleData: [],
      insideChecked: [], //选中项
    };
  },
  props: {
    //默认标题
    label: {
      default: "选择器",
      required: false,
    },
    labelStyle: {
      default: "",
    },
    //按钮组列表
    checkboxList: {
      type: Array,
    },
    //显示的值
    dsplayValue: {
      default: "value",
    },
    //绑定的key
    valueKey: {
      default: "id",
    },
    //是否支持多选
    multiple: {
      default: false,
    },
    //双向绑定value
    checked: {
      type: Array,
      default: () => {},
    },
  },
  watch: {
    checked: {
      handler() {
          console.log(this.checkboxList)
        this.handleData = this.checkboxList.map((item) => {
          item.isActive = false;
          this.checked.forEach((check) => {
            if (item[this.valueKey] == check) {
              item.isActive = true;
            }
          });
          return item;
        });
      },
      immediate: true,
      deep: true,
    },
    insideChecked: {
      handler(val) {
        // console.log(val);
        this.$emit("update:checked", val);
      },
    },
  },
  methods: {
    handelClick(item) {
      //单选清空其他所有激活
      if (!this.multiple) {
        this.handleData.forEach((c) => {
          c.isActive = false;
        });
      }
      item.isActive = !item.isActive;
      this.insideChecked = [];
      this.handleData.forEach((c) => {
        if (c.isActive) {
          this.insideChecked.push(c[this.valueKey]);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.d_checkbox {
  .checkbox_label {
    color: #999;
    line-height: 40px;
    font-size: 14px;
  }
  .checkbox_buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #7f7f7f;
    .checkbox_buttons_item {
      width: 48%;
      height: 35px;
      color: #7f7f7f;
      font-size: 14px;
      line-height: 35px;
      background: #f9f9f9;
      border-radius: 2px;
      box-sizing: border-box;
      border: none;
      margin-bottom: 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      padding: 0 10px;
    }
    .checkbox_buttons-item:last-child {
      margin-bottom: 0;
    }
    .checkbox_buttons_item._active {
      background: #d8e3ff;
      border: 1px solid #4b7bec;
      color: #4b7bec;
      border-radius: 2px;
      color: #4b7bec;
      background: #d8e3ff;
    }
    //占据一行的样式
    .checkbox_buttons_item.is_aline {
      width: 100%;
    }
    .no_data {
      text-align: center;
      color: #999;
      width: 100%;
    }
  }
}
</style>>