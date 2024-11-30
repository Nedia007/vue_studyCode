<template lang="">
  <div class='person'>
   <ul>
    <li v-for='item in list' :key="item.id">
      {{item.name}}--{{item.age}}
    </li>
   </ul>
  </div>
</template>

<script  lang="ts" setup name="Person">
// defineProps definExpose
import { defineProps ,withDefaults} from 'vue';
import {type Persons } from '@/types';
// 只接收list
defineProps(['list'])
// console.log(a)//无法直接打印 父传子的数据

// 接收list，同时将props保存起来
// let x = defineProps(['list']); //返回的是对象
// console.log(x.list)
// console.log(x)

// 接收list+限制类型
defineProps<{list:Persons}>()
// 接收+限制类型+限制必要性+指定默认值withDefaults
withDefaults(defineProps<{ list?: Persons }>(), {
  list:()=>[{id:'sadasd',name:'康师傅',age:11}]//必须要返回一个值
})
</script>
<style scoped>
/*局部样式 scoped*/
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
