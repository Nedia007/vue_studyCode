<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <!-- 如果数据是异步的就要用这个包裹 -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 上面的是异步成功之后出现，下面的是异步未完成出现 -->
      <template v-slot:fallback>
        <h2>加载中。。。</h2>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
  import {Suspense} from 'vue'
  import Child from './Child.vue';
</script>


<style scoped>
.app{
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px; 
  box-shadow: 0 0 10px;
}
</style>