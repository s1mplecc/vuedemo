<template>
  <div class="footer">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/manager">人员管理</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
