<template lang="">
  <div class='person'>
   <h1>需求：当水温达到60或者水位达到80，给服务器请求</h1>
  
   <h1>当前水温：{{temp}}</h1>
   <h1>当前水位：{{height}}</h1>
    <Button @click="changeTemp">水温+10</Button>
  <Button @click="changeH">水位+10</Button>
  </div>
</template>

<script  lang="ts" setup name="Person">
import { ref, watch, watchEffect } from 'vue'
//watchEffect可以自己分析监视谁
let temp = ref(10)
let height = ref(0)
function changeTemp() {
  temp.value+=10
}
function changeH() {
  height.value += 10
}

// watch([temp,height],(value)=>{
//   let [newTemp, newHeight] = value;
//   if (newTemp>=60||newHeight>=80) {
//     console.log('发请求')
//   }
// })
//watchEffect 实现监视
watchEffect(() => {
  //会立即运行一个函数。会响应式的追踪依赖，并且更改时会重新执行
  if (temp.value >= 60 || temp.value >= 80) {
    console.log('发请求')
  }
})
// watch 和watchEffect的对比
// 1.都能监听响应式数据的变化，但是监听方式不同
// 2.watch：要明确指出监听的数据
// 3.watchEffect不用明确指出监视的数据
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
