<template>
  <div class="nb-pagination">
    <!-- <button>{{ prevText }}</button> -->

    <ul class="nb-pagination__pages">
      <li 
        v-for="item in pagers" 
        :key="item" 
        :class="{active: currentPage === item}"
        class="nb-pagination__page"
        @click="bindPageClick(item)"
      >
        {{ item }}
      </li>
    </ul>
    <!-- <button>{{ nextText }}</button> -->
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'NbPagination',
    props: {
      total: Number,
      currentPage: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      prevText: {
        type: String,
        default: '<'
      },
      nextText: {
        type: String,
        default: '>'
      },
    },

    data() {
      return {
        visible: true,
      };
    },

    computed: {
      pagers () {
        let pagetotal = new Array(Math.ceil(this.total/this.pageSize));
        for (let i=0; i<pagetotal.length; i++) {
          pagetotal[i] = i+1;
        }
        return pagetotal
      }
    },

    methods: {
      bindPageClick (current) {
        this.$emit('change', current)
      }
    }
  };
</script>

<style lang="scss" src="../../../theme/pagination.scss"></style>
