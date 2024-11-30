<!-- <template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template> -->

<template>
  <ul class="news-list">
    <li>编号：{{ id }}</li>
    <li>标题：{{ title}}</li>
    <li>内容：{{ content }} </li>
  </ul>
</template>
<script setup lang="ts" name="About">
// //通过route 的query获取参数
// import { useRoute } from 'vue-router'
// import { toRefs } from "vue";
// const route = useRoute();
// console.log(route)//
// //解构赋值
// // let { query } = route;
// // 需要恢复响应式
// let { query } = toRefs(route);

import { title } from "process";

// params写法
// import { useRoute } from 'vue-router';
// const route = useRoute();


// 使用路由规则的Props写 
defineProps(['id',title,'content'])
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>