<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onUnmounted } from 'vue'
	import emitter from '@/utils/emitter';
	// 数据
let computer = ref('联想');
// 自己的玩具
let toy = ref('');
//弟弟想要哥哥的玩具 给emitter绑定send-toy事件
emitter.on('send-toy', (val) => {
  console.log('send-toy', val)
  toy.value = val;
})
// 当卸载的时候解绑send-toy事件
onUnmounted(() => {
  emitter.off('send-toy');
})

// 绑定数据(订阅消息) 提供数据（发表消息）
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>