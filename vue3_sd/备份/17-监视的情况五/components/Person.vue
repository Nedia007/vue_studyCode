<template lang="">
  <div class='person'>
    <h1>情况五：监视多个数据</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>汽车:{{person.car.c1}}、{{person.car.c2}}</h2>

    <button @click='changeName'>修改名字</button>
    <button @click='changeAge'>修改age</button>
    <button @click='changeCar1'>修改car1</button>
    <button @click='changeCar2'>修改car2</button>
    <button @click='changeCar'>修改整车</button>

  

  </div>
</template>

<script  lang="ts" setup name="Person">
import { reactive,watch } from "vue";
//数据
let person = reactive({
  name: '张三', age: 18, car: {
    c1:'ben',c2:'asdas'
  }
})
//方法
function changeName(){
  person.name+='~'
}
function changeAge() {
  person.age += 1
}
function changeCar1() {
  person.car.c1 = 'toyota'
}
function changeCar2() {
  person.car.c2= 'toyota'

}
function changeCar() {
  person.car={c1:'雅迪',c2:'艾玛'}
}
watch([() => person.name, () => person.car.c1], (newVal, oldVal) => {
  console.log(newVal, oldVal)
}, { deep: true })

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
