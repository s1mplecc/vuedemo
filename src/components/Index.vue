<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import FooterNav from './public/Footer'

  export default {
    name: 'Index',
    data() {
      return {
        msg: '欢迎来到人员管理系统'
      }
    },
    components: {FooterNav}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #42b983;
  }
</style>
