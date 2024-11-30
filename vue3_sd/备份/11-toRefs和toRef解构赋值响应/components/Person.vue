<template lang="">
  <div class='person'>
    <h2>名字：{{person.name}}</h2>
    <h2>age：{{person.age}}</h2>
    <button @click='changeName'>修改名字</button>
    <button @click='changeAge'>修改年龄</button>

    <button></button>

  </div>
</template>

<script  lang="ts" setup name="Person">
import { reactive, toRefs,toRef } from 'vue';
//数据
let person = reactive({
  name: '张三',
  age:18
})
//此处解构赋值 数据更新了，但是不是响应式
// let { name, age } = person
//相对于 let name = person.name let age = person.age
// 想要解构成响应式 使用toRefs  将解构出来的对象变成一个ref对象
let { name, age } = toRefs(person)  //所有的属性取出来

let nl =toRef(person,'age')//只能一个个取
function changeName(){
  person.name+='~'
}
function changeAge() {
  person.age += 1
}
</script>
<style scoped>
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
