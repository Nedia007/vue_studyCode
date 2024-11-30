<template lang="">
  <div class='person'>
    <h1>name:{{name}}</h1>
    <h1>age:{{age}}</h1>
    <button @click='showTel'>checked</button>
    <button @click='changeName'>修改name</button>
    <button @click='changeAge'>修改age</button>
  

  </div>
</template>

<script lang="ts">
//专门配置组件的 使用插件进行简化  npm i vite-plugin-vue-setup-extend -D
import { Teleport } from 'vue';
export default {
  name: 'Person',
}
</script>
<!-- 简化后的写法 -->
<script lang="ts" name="Person234">
</script>

<script setup lang="ts">//这里相当于写的setup函数 且return了
  let a = 666;
  let name = '张三'//不是响应式的
  let age = 18//不是响应式的
  let tel = '111111'//不是响应式的
  // let x=d//不能获取data的值
  //方法
  function changeName() {
    name = 'zhangsan' //修改了，但是页面没有变化
  }
  function changeAge() {
    age += 1//修改了，但是页面没有变化
  }
  function showTel() {
    alert(tel)
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
