<template>
  <ul class="nb-pagination__pages">
    <li 
      v-for="(item, index) in pages" 
      :key="index" 
      :class="{'active': currentPage === item, 'nb-pagination__backgroundpage': background}"
      class="nb-pagination__page"
      @click="handlePageClick(item, index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'NbPages',
    props: {
      total: {
        type: Number,
        default: 0
      },
      currentPage: {
        type: Number,
        default: 1
      },
      pages: {
        type: Array,
        default: () => []
      },
      pageCount: {
        type: Number,
        validator (value) {
          return (value | 0) === value && value > 6 && value < 22 && (value % 2) === 1;
        },
        default: 7
      },
      pageSize: {
        type: Number,
        default: 10
      },
      background: {
        type: Boolean,
        default: false,
      }
    },

    data() {
      return {
        
      };
    },

    methods: {
      handlePageClick (current, index) {
        let jumpPageCount = this.pageCount - 4;
        if(this.currentPage === current){
          return ;
        }else if (current==='···' && index===1) {
          let temcurrent = (this.currentPage - jumpPageCount)<1 ? 1 : (this.currentPage - jumpPageCount);
          this.$emit('update:currentPage', temcurrent)
        }else if (current==='···' && index!==1) {
          let temcurrent = (this.currentPage + jumpPageCount) > Math.ceil(this.total / this.pageSize) ? Math.ceil(this.total / this.pageSize) : (this.currentPage + jumpPageCount);
          this.$emit('update:currentPage', temcurrent)
        }else{
          this.$emit('update:currentPage', current)
        }
      }
    }
  };
</script>

<style lang="scss" src="../../../theme/pagination.scss"></style>
