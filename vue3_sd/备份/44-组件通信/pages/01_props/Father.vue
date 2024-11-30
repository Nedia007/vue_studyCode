<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
    <!-- 父亲传子 -->
		<Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
// 数据
let car = ref('奔驰');
let toy = ref('');
// 父传子，接收数据的父亲需要提前定义一个方法 传给孩子
function getToy(val:string) {
  toy.value = val;
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>