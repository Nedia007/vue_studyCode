<template>
  <div class="app">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <button @click="changeSum2">点我sum2+1</button>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="person.age += 1">修改年龄</button>
    <hr>

  </div>
</template>

<script setup lang="ts" name="App">
// shallowReadonly 只限制第一层
// readonly 限制所有的
import { ref, readonly,shallowReadonly, reactive,toRaw,markRaw} from 'vue'
let sum = ref(0)
let sum2 = readonly(sum)
// 响应式数据
let person = reactive({
  name: 'tony',
  age:18
})
// toRaw 直接把响应式对象变成 原始对象  没有响应式 
let person2 = toRaw(person);
// markRaw 标记一个对象 让它永远变成不是响应式的
let car = markRaw({ brand: '奔驰', price: 100 })
//这里的car2也不会响应
let car2 = reactive(car)
// 为了防止把第三方库的对象变成响应式对象，需要使用markRaw标记一下

// 一般要将响应式对象传递给非vue的库或者外部系统时，使用toRaw 可以确保是原始对象
function showPerson(p) {
  p.age += 10
  p.name += '~'
  console.log(p)
}
function changeSum() {
  sum.value+=1
}
function changeSum2() {
  // 因为sum2是只读的 所以就不能修改 用于保护数据
  sum2.value += 1
}
</script>

<style scoped>
.app{
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 10px;
}
</style>