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


  </div>
</template>

<script  lang="ts" setup name="Person">
import { ref ,reactive} from 'vue';
//注意点：他的响应式是深层次的
//只能定义对象类型的响应式数据
//被包裹之后产生的是响应式对象
//数据
let car = ref({ brand: '奔驰', price: 110 })
let games = ref([
  { id: 'asdasdas', name: '王者' },
  { id: 'asdasdas', name: '王者2' },
  { id: 'asdasdas', name: '王者3' }

])
// let name = reactive('aaaa')//reactive不能处理基本类型
//ref处理对象，实际上内部还是用的reactive处理对象

//方法
function changePrice() {
  car.value.price += 10;
}
function changeFg() {
  games.value[0].name = '7k7k';

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
