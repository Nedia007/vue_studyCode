<template lang="">
  <div class='person'>
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click='changeName'>修改名字</button>
    <button @click='changeAge'>修改age</button>
    <button @click='changeALl'>修改ren</button>
    <h2>test：{{obj.a.b.c}}</h2>
    <button @click='Test'>修改</button>

  </div>
</template>

<script  lang="ts" setup name="Person">
import { reactive,watch } from "vue";
//数据
let person = reactive({
  name: '张三',
  age:18
})
let obj = {
  a: {
    b: {
      c:111
    }
  }
}
function changeAge() {
  person.age += 1
}
function changeName() {
  person.name+='~'
}
function changeALl() {
// 修改了属性，但是不能替换整个person，原对象不可变
  Object.assign(person, {
    name: '张4',
    age: 28
  })
}
function Test() {
  obj.a.b.c=999
}
// 情况三：监视【reactive】定义的【对象类型】数据 且默认开启深度监视的 
watch(person, (newVal,oldVal) => {
  console.log('person',newVal,oldVal)
})
watch(obj, (newVal, oldVal) => {
  //newVal, oldVal相同，因为对象的地址值没变
  console.log('obj', newVal, oldVal)
})
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
