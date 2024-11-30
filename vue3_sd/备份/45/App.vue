<template>
  <h2>求和为：{{ sum }}</h2>
  <h2>名字为：{{ person.name }}</h2>
  <h2>年龄为：{{ person.age }}</h2>
  <h2>汽车信息：{{car}}</h2>

  <button @click="changeSum">sum+1</button>
  <button @click="changeAge">改变年龄</button>
  <button @click="changeName">改变名</button>
  <button @click="changePerson">改变人</button>

  <button @click="changeBrand">改变brand</button>
  <button @click="changeColor">改变color</button>
  <button @click="changeEngine">改变engine</button>
  <!-- <button @click="changeCar">改变car</button> -->

</template>

<script setup lang="ts" name="App">
import { options } from 'node_modules/axios/index.cjs';
import { ref, reactive,shallowRef ,shallowReactive} from 'vue'
// shallowRef只处理第一层浅层次的响应式
// 浅层式API创建的状态只能在其顶层是响应式的，所有深层对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能
// 只关注整体修改 
let sum = shallowRef(0)  
let person = shallowRef({
  name: '张三',
  age:18
})

let car = shallowReactive({
  brand: '奔驰',
  options: {
    color: '红色',
    engine:'v8'
  }
})
function changeSum() {
  sum.value += 1
}
function changeName() {
  person.value.name='lisi'
}
function changeAge() {
  person.value.age=60
}
function changePerson() {
  person.value ={name:'zhangshan',age:88}
}
function changeBrand() {
  car.brand = '宝马'
}
function changeColor() {
  car.options.color = '紫色'
}
// function changeCar() {
//   Object.assign(car,{})
// }
function changeEngine() {
  car..options.engine = 'v10'
}
</script>

<style scoped>
.app{
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 10px;
}
</style>