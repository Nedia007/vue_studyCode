<template lang="">
  <div class='person'>
    <h1>name:{{name}}</h1>
    <h1>age:{{age}}</h1>
    <button @click='showTel'>checked</button>
    <button @click='changeName'>修改name</button>
    <button @click='changeAge'>修改age</button>
    <h1>test:{{a}}</h1>
    <button @click='b'>test</button>

  </div>
</template>
<script lang="ts">
import { Teleport } from 'vue';

export default {
  name: 'Person',
  data() {
    return {
      a: 100,
      c: this.name,//原来的写法可以读取新的数据
      d:900,
    }
  },
  methods: {
    b() {
      
    }
  },
  // data和methods可以和setup同时存在
//setup是最早的生命周期，所以this可以读取到name
  setup(props, ctx) {//setup里面this 是undifined vue3弱化this
    //数据 
    let name = '张三'//不是响应式的
    let age = 18//不是响应式的
    let tel = '111111'//不是响应式的
    // let x=d//不能获取data的值
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
     //要将数据、方法交出去，模板才可以用
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
