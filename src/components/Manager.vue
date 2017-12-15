<template>
  <div class="manager">
    <button>新增</button>
    <div class="input-area">
      <input type="text" placeholder="请输入人员姓名"/>
      <button>确定</button>
    </div>
    <table>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr>
        <td>张三</td>
        <td><span>编辑</span> <span>删除</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "manager"
  }
</script>

<style scoped>
  button {
    font-weight: normal;
    color: #42b983;
    background: lightblue;
  }
</style>
