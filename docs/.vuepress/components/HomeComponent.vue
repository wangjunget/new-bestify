<template>
  <div class="custom-container">
    <navbar></navbar>
    <main><span>nb-ui</span></main>
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
  computed: {},
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 50px;
  color: red;

  span {
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: spin 3s infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
