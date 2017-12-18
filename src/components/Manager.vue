<template>
  <div class="manager">
    <button v-on:click="add">新增</button>

    <table WIDTH=200 CellSpacing=8>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in peoples">
        <td>{{item.name}}</td>
        <td v-bind:id="index"><span v-on:click="del">删除</span></td>
      </tr>
    </table>

    <form class="add-name" v-show="showAdd">
      <input type="text" placeholder="请输入人员姓名" required="required" v-model="nameValue"/>
      <button type="button" v-on:click="addName">确定</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "manager",
    data() {
      return {
        showAdd: false,
        nameValue: undefined,
        peoples:
          [{name: '王红'}, {name: '李明'}]
      }
    },
    methods: {
      add() {
        this.showAdd = true
      },
      addName() {
        if (this.nameValue.trim() !== '') {
          console.log(this.nameValue)
          this.peoples.push({name: this.nameValue})
          this.showAdd = false
          this.nameValue = undefined
        }
      },
      del(e) {
        this.peoples.splice(e.target.offsetParent.id, 1)
      }
    }
  }
</script>

<style scoped>
  button {
    font-weight: normal;
    color: aqua;
    background: lightblue;
    display: inline-block;
    *display: inline;
    vertical-align: baseline;
    margin: 0 2px;
    outline: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font: 14px/100% Arial, Helvetica, sans-serif;
    padding: .4em 2em .55em;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .3);
    -webkit-border-radius: .5em;
    -moz-border-radius: .5em;
    border-radius: .5em;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  }

  input {
    width: 130px;
    height: 20px;
    font-size: 15px;
  }

  span {
    color: aqua;
  }

  table {
    margin: 0 auto;
  }

  td {
    text-align: center;
  }
</style>
