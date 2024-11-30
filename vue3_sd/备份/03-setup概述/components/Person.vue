<template lang="">
  <div class='person'>
    <h1>name:{{name}}</h1>
    <h1>age:{{age}}</h1>
    <button @click=showTel>checked</button>
    <button @click=changeName>修改name</button>
    <button @click=changeAge>修改age</button>

  </div>
</template>
<script lang="ts">
import { Teleport } from 'vue';

export default {
  name: 'Person',
  // data() {//选项式/配置式api写法
  //   return {
  //     name: '张三',
  //     age: 18,
  //     Tel:'1111111'
  //   }
  
  // },
  // methods: {//选项式/配置式api写法
  //   showTel() {
  //     alert(this.Tel)
  //   },
  //   changeName() {
  //    this.name='asdasdsa'
  //   },
  //   changeAge() {
  //     this.age+=1
  //   }
  // }
  setup(props, ctx) {//setup里面this 是undifined vue3弱化this
    //数据 
    let name = '张三'//不是响应式的
    let age = 18//不是响应式的
    let tel = '111111'//不是响应式的
    //方法
    function changeName() { 
      name='zhangsan' //修改了，但是页面没有变化
    }
    function changeAge() { 
      age += 1//修改了，但是页面没有变化
    }
    function showTel() {
      alert(tel)
     }
    return { name, age, changeName, changeAge, showTel }
    //setup的返回值也可以是一个渲染函数
    // return ()=>'hahaha'
  },
}
</script>
<style scoped>
    .person {
      background-color: #dddddd;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
    }
    button {
      margin:0 5px;
    }
</style>
