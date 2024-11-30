<template>
  <div class="father">
    <h3>父组件</h3>
    <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
    <!-- 给子组件Child绑定事件  @自定义事件 多个单词用肉串命名 -->
    <Child @send-toy="saveToy" />
    <Child @haha="xyz" />
    <button @click="test(6, 7, $event)">点我</button>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from "vue";
let str = ref('你好');
// 数据
let toy = ref('')
// 用于保存传递过来的玩具
function saveToy(value: string) {
  console.log('saveToy', value)
  toy.value = value
}
function test(a: number, b: number, c: Event) {
  console.log('test', a, b, c)
  str.value = '哈哈';
}
function xyz(val: number) {
  console.log('xyz', val);
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.father button {
  margin-right: 5px;
}
</style>