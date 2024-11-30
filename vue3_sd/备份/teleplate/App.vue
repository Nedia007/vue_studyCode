<template>
  <div class="outer">
    <h2>我是App组件</h2>
    <img src="http: //www.atguigu.com/images/index_new/logo.png" alt="">
    <br>
    <Modal/>
  </div>
</template>

<script setup lang="ts" name="App">
 import {} from './Modal.vue'
</script>

<style scoped>
.outer{
  background-color: #ddd;
  border-radius:10px;
  padding:5px;
  box-shadow:0 0 10px;
  /*饱和度*/
  filter: saturate(0%);
}
img {
  width: 270px;
}
</style>