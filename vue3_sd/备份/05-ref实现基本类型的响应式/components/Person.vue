<template lang="">
  <div class='person'>
    <h1>name:{{name}}</h1>
    <h1>age:{{age}}</h1>
    <button @click='showTel'>checked</button>
    <button @click='changeName'>修改name</button>
    <button @click='changeAge'>修改age</button>
  

  </div>
</template>

<!-- <script lang="ts">
//专门配置组件的 使用插件进行简化  npm i vite-plugin-vue-setup-extend -D
export default {
  name: 'Person',
}
</script> -->

<script  lang="ts" setup name="Person">//这里相当于写的setup函数 且return了
  import { ref } from 'vue'//实现响应式 处理基本类型的数据

  let a = 666;
  let name = ref('张三');//ref包住就是响应式 实现实例对象
  let age = ref(18)//是响应式的
  let tel = '111111'//不是响应式的

  //方法
  function changeName() {
    name.value = 'zhangsan' 
  }
  function changeAge() {
    age.value += 1
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
