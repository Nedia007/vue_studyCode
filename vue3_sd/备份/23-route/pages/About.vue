<template>
  <div class="about">
    <h2>大家好，欢迎来到尚硅谷直播间</h2>
  </div>
</template>

<script setup lang="ts" name="About">
// 出现了就是挂载了
// 页面消失的路由内容，其实是组件被卸载了
import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  console.log('Aboout组件挂载了');
})
onUnmounted(() => {
  console.log('Aboout组件卸载了');

})
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;
}
</style>