<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import FooterNav from './components/public/Footer'

  export default {
    name: 'app',
    components: {FooterNav}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
