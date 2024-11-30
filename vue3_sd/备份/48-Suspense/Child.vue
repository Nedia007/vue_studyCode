<template lang="">
  <div class="child">
    <h2>我是child</h2>
    <h3>当前求和为：{{sum}}</h3>
  </div>
</template>
<script setup lang="ts" name="Child">
import { ref } from "vue";
import axios from "axios";
let sum = ref(0)
let { data: content } = await axios.get('')
// 子组件有异步任务，异步任务提供的数据需要显示，网速慢的时候也能呈现东西
</script>
<style scoped>
.child{
  background-color: #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px;
}

</style>