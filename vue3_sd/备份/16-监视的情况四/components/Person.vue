<template lang="">
  <div class='person'>
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
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
// 情况四，想要监听ref或者reactive定义的对象【类型数据】中的某个属性，注意点
//如果：想要监视peson的name  该属性不是对象类型也就是基本类型，要写成【函数形式】
//getter 就是能返回一个值的函数
watch(() => person.name, (newVal,oldVal) => {

})
//如果监视的属性是一个对象 ,可以直接写，也可以写成函数，建议写成函数
// watch(person.car, (newVal, oldVal) => {
//   //这会导致整车的变化不行，因为 car的地址变了
//   console.log('person.car变化了',newVal, oldVal)
// })
// watch(() => person.car, (newVal, oldVal) => {
//   //这会导致修改car1，car2的变化不行
//   console.log('person.car变化了',newVal, oldVal)
// })
// 优化写法
watch(() => person.car, (newVal, oldVal) => {
  //这会导致修改car1，car2的变化不行
  console.log('person.car变化了', newVal, oldVal)
}, { deep: true })

// 结论：监视对象里的属性，最好写函数式，若对象监视的是地址值，需要关注对象内部，需要手动开启深度监视
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
