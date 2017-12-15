<template>
  <div class="manager">
    <button v-on:click="add">新增</button>
    <form class="input-area" v-show="showAdd">
      <input type="text" placeholder="请输入人员姓名" required="required" v-model="nameValue"/>
      <button type="submit" v-on:click="addName">确定</button>
    </form>
    <table>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in peoples">
        <td>{{item.name}}</td>
        <td v-bind:id="index"><span v-on:click="del">删除</span></td>
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
      },
      addName() {
        if (this.nameValue.trim() !== '') {
          this.peoples.push({'name': this.nameValue})
        }
      },
      del(e){
        this.peoples.splice(e.target.offsetParent.id,1)
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

  span {
    color: aqua;
  }
</style>
