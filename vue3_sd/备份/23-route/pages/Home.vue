<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<script setup lang="ts" name="Home">
import router from '@/router';
import { onMounted } from 'vue';
// 路由器
import { useRouter } from 'vue-router';
const router = useRouter();
// 想要编写跳转到home  需要编程式路由导航不用RouteLink实现路由跳转
// onMounted(() => {
//   setTimeout(() => {
//     router.push('/news');//使用频率高
//   },3000)
//   })

// 
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>