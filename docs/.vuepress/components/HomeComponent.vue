<template>
  <div class="custom-container">
    <navbar></navbar>
    <main>
      <div class="logo" ref="logo">new-bestify</div>
    </main>
  </div>
</template>

<script>
import Navbar from '@vuepress/theme-default/components/Navbar'

export default {
  name: 'HomeComponent',
  data() {
    return {}
  },
  components: {
    Navbar,
  },
  mounted() {
    setInterval(() => {
      this.start();
    }, 3000)
  },
  computed: {},
  methods: {
    start() {
      const top = Math.floor((Math.random()*100)+1) + 'vh';
      const left = Math.floor((Math.random()*100)+1) + 'vw';
      this.$refs['logo'].style.top = top;
      this.$refs['logo'].style.left = left
    }
  }
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 3.6rem);
  font-size: 50px;
  color: red;
  position: relative;
  padding-top: 3.6rem;

  .logo {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: scale 3s infinite;
  }

  @keyframes scale {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(2);
    }
  }
}
</style>
