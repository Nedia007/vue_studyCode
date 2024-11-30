<template lang="">
  <div class="category">
    <h2>{{title}}</h2>
    <!-- 插槽占位 默认插槽 -->
    <slot>默认内容</slot>
  </div>
</template>
<script setup lang="ts" name="Category">
// 接收title
defineProps(['title']);
</script>
<style scoped>
  .category{
    background-color: blue;
    border-radius:10px ;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
  }
</style>