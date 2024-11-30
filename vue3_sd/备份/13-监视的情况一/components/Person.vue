<template lang="">
  <div class='person'>
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h1>当前求和为：{{sum}}</h1>
    <Button @click="changeSum">sum+1</Button>
  </div>
</template>

<script  lang="ts" setup name="Person">
//Vue3的watch只能监视这四种数据
//ref定义的数据
//reactive 定义的数据
//函数返回一个值（getter函数）
//一个包含上述内容的数组

import { ref,watch } from "vue";
//数据
let sum = ref(0)
function changeSum(){
  sum.value += 1;
}
//监视
// watch(谁，函数)  情况一：监视【ref】定义的【基本类型】数据
const stopWatch =watch(sum, (newVal,oldVal) => {//sum没有.value
  console.log('sum变化了', newVal, oldVal)
  // 主动停止监视
  if (newVal >= 10) {
    stopWatch()
  }
})
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
