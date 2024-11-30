<template lang="">
  <div class='person'>
    <h1>一辆{{car.brand}}车，价值{{car.price}}</h1>
    <button @click='changePrice'>修改汽车价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <!-- :代表要解析 -->
      <li v-for='item in games' :key='item.id'>
        {{item.name}}
      </li>
    </ul>
    <button @click='changeFg'>修改游戏名字</button>
    <hr>
    <h2>test{{obj.a.b.c}}</h2>
    <button @click='changeObj'>修改Test</button>


  </div>
</template>

<script  lang="ts" setup name="Person">
import { reactive } from 'vue';
//注意点：他的响应式是深层次的
//定义对象类型的响应式数据
//被包裹之后产生的是响应式对象
//数据
let car = reactive({ brand: '奔驰', price: 110 })
let games = [
  { id: 'asdasdas', name: '王者' },
  { id: 'asdasdas', name: '王者2' },
  { id: 'asdasdas', name: '王者3' }

]
let obj = reactive({
  a: {
    b: {
      c: 666
    }
  }
})

//方法
function changePrice() {
  car.price += 10;
}
function changeFg() {
  games[0].name = '7k7k';

}
function changeObj() {
  //深层次响应式
  obj.a.b.c=999
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
