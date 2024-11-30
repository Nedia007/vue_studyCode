<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的电脑</button>
    <!-- 获取所有的子组件实例对象 -->
		<button @click="getAllChild($refs)">让所有孩子的书变多</button>
		<Child1 ref="c1"/>
		<Child2 ref="c2"/>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue'
	import Child2 from './Child2.vue'
	import { ref,reactive } from "vue";
	let c1 = ref()
	let c2 = ref()

	// 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应式对象中的
	/* let obj = reactive({
		a:1,
		b:2,
		c:ref(3)
	})
	let x = ref(4)

	console.log(obj.a)
	console.log(obj.b)
	console.log(obj.c)//响应式对象会自动拆包
	console.log(x) */
	

	// 数据
	let house = ref(4)
	// 方法
function changeToy() {
    // 父传子
		c1.value.toy = '小猪佩奇'
	}
	function changeComputer(){
		c2.value.computer = '华为'
}
  // refs是一个对象 里面有key，但是key的内容不确定，能确定一定是一个字符串
	function getAllChild(refs:{[key:string]:any}){
		console.log(refs)  //refs是一个对象
		for (let key in refs){
			refs[key].book += 3
		}
	}
	// 向外部提供数据
	defineExpose({house})
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

