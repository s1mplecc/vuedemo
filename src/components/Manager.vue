<template>
  <div class="manager">
    <button v-on:click="add">新增</button>
    <div class="input-area" v-show="showAdd">
      <input type="text" placeholder="请输入人员姓名"/>
      <button>确定</button>
    </div>
    <table>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in peoples">
        <td>{{item.name}}</td>
        <td><span>编辑</span> <span>删除</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "manager",
    data() {
      return {
        showAdd: false,
        peoples:
          [{'name': '王红'}, {'name': '李明'}]
      }
    },
    methods: {
      add() {
        this.showAdd = true
      }
    }
  }
</script>

<style scoped>
  button {
    font-weight: normal;
    color: #42b983;
    background: lightblue;
  }
</style>
