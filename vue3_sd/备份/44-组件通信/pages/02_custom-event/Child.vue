<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emit('send-toy',toy)">测试</button>
    <button @click="emit('haha', 666)">测试</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import { ref,onMounted } from "vue";
	// 数据
let toy = ref('奥特曼')
  // 孩子将自己的玩具交给父亲
	// 声明事件  自定义事件
const emit = defineEmits(['send-toy', 'haha'])
onMounted(() => {
  setTimeout(() => {
    // 调用haha
    emit('haha')
    },3000)
  })
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>