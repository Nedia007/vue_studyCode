<template lang="">
  <div class='person'>
    <h1>一辆{{car.brand}}车，价值{{car.price}}</h1>
    <button @click='changePrice'>修改汽车价格</button>
    <button @click='changeBrand'>修改汽车品牌</button>
    <button @click='changeCar'>修改汽车</button>

    <br>
    <h1>当前求和：{{sum}}</h1>
    <button @click='changeSum'>点我+1</button>

  </div>
</template>

<script  lang="ts" setup name="Person">
import { ref ,reactive} from 'vue';
//数据
let car = reactive({ brand: '奔驰', price: 110 })
let sum = ref(0)
//方法
function changePrice() {
  car.price += 10;
  
}
function changeSum() {
  sum.value += 1;
}
function changeBrand() {
  car.brand='宝马'
}
function changeCar() {
  //reactive重新分配了一个对象 就会变成一个普通对象 就会失去响应式
  // car = { brand: 'toyota', price: 1 }
  // car = reactive({ brand: 'toyota', price: 1 })//不行
  //ractive要这么写  使用浅拷贝 将引用拷贝到原来的car
  Object.assign(car, { brand: 'toyota', price: 1 })
  //但是如果式ref就可以直接写
  // car = { brand: 'toyota', price: 1 }
}
// 使用原则
//如果需基本类型的响应式数据，必须使用ref
//如果需要一个响应式对象，层级不深，ref，reactive都可以
//如果需要一个响应式对象，层级很深，推荐使用reactive
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
