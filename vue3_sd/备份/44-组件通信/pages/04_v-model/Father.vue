<template>
  <div class="father">
    <h3>父组件{{ username }}</h3>
    <!-- v-model用在html标签上 双向绑定 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- 底层逻辑 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- <AtguiguInput 
    :modelValue="username" 
    @update:modelValue="username = $event" 
    /> -->
    <h3>父组件{{ password }}</h3>
    <!-- 修改modelValue -->
    <AtguiguInput v-model:qwe="username" v-model:mima="password" />
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
// 数据 
let username = ref('zhangsan')
let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
