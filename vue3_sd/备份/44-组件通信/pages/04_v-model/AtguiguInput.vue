<template>
  <!-- 封装一可以双向绑定的组件  -->
  <input 
  type="text" 
  :value="qwe" 
  @input="emit('update:qwe',(<HTMLInputElement>$event.target).value)"
  >
  <!-- 原生事件$event 是dom标签对象，是标准标签就要target 自定义事件 $event就是触发事件时所传递的数据 -->
  <input 
  type="text" 
  :value="mima" 
  @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
</template>

<script setup lang="ts" name="AtguiguInput">
//接收参数
defineProps(['modelValue', 'mima','qwe'])
//声明事件
const emit = defineEmits(['update:modelValue', 'update:mima', 'update:qwe'])
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>