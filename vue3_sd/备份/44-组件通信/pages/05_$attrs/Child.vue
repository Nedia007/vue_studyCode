<template>
	<div class="child">
		<h3>子组件</h3>
    <!-- <h4>a:{{ a }}</h4> -->
    <!-- <h4>其他：{{ $attrs }}</h4> -->
     <!-- 儿子不接收，直接单向给子组件 -->
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from './GrandChild.vue'
// 没接收的，就会放在attr里面
  // defineProps(['a'])
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>