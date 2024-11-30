<template lang="">
  <div class='person'>
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click='changeName'>修改名字</button>
    <button @click='changeAge'>修改age</button>
    <button @click='changeALl'>修改ren</button>

  </div>
</template>

<script  lang="ts" setup name="Person">
//Vue3的watch只能监视这四种数据
//ref定义的数据
//reactive 定义的数据
//函数返回一个值（getter函数）
//一个包含上述内容的数组

import { ref,watch } from "vue";
//数据
let person = ref({
  name: '张三',
  age:18
})
function changeAge() {
  person.value.age += 1
}
function changeName() {
  person.value.name+='~'
}
function changeALl() {
  person.value = {
    name: '张4',
    age: 28
}
}
// 监视 情况二：监视【ref】定义的【对象类型】数据,监视的是对象的地址值，若想监视对象内部属性的变化，需要开启深度监视模式
watch(person, (newVal, oldVal) => {
  //如果只是改变person的属性，newVal,oldVal会是同一个新值，因为他们是同一个对象
  // 若修改整个ref定义的对象，newVal实是新值，oldVal是旧值，因为不是同一个对象了
  console.log('person变化了',newVal,oldVal)
}, {
  //watch配置
  deep: true,
 // immediate:true//立即监视，数据没发生变化也启动
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
