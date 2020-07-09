<template>
  <transition name="el-alert-fade">
    <div
      v-show="visible"
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      role="alert"
    >
      <i
        v-if="showIcon"
        class="el-alert__icon"
        :class="[ iconClass, isBigIcon ]"
      />
      <div class="el-alert__content">
        <span
          v-if="title || $slots.title"
          class="el-alert__title"
          :class="[ isBoldTitle ]"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p
          v-if="$slots.default && !description"
          class="el-alert__description"
        >
          <slot />
        </p>
        <p
          v-if="description && !$slots.default"
          class="el-alert__description"
        >
          {{ description }}
        </p>
        <i
          v-show="closable"
          class="el-alert__closebtn"
          :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }"
          @click="close()"
        >{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error'
  };
  export default {
    name: 'ElAlert',

    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        validator: function(value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
      }
    },

    data() {
      return {
        visible: true
      };
    },

    computed: {
      typeClass() {
        return `el-alert--${ this.type }`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    }
  };
</script>

<style lang="scss" src="../../../theme/alert.scss">

</style>
