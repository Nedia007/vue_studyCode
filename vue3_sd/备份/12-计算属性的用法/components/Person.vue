<template lang="">
  <div class='person'>
    姓：<input type='text' v-model='fn'></input><br>
    名：<input type='text' v-model='ln'></input><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName2()}}</span><br>
    <button @click='changeName'>将全名修改成xxx</button>
  </div>
</template>

<script  lang="ts" setup name="Person">
// 计算属性的写法
//先引入
import { ref ,computed} from 'vue'
let fn = ref('zhang');
let ln =ref('san')
//只要依赖数据发生变化，就会重新计算  并且有缓存的，如果计算的一样的就不会重新计算
//这么定义的计算属性，不可修改（不可以fullName=xxx）
// let fullName = computed(() => {
//   return fn.value.slice(0,1).toUpperCase()+fn.value.slice(1)+'-'+ln.value;
// })
// 定义一个可以读可以写的只读属性
let fullName = computed({
  get(){
    return fn.value.slice(0, 1).toUpperCase() + fn.value.slice(1) + '-' + ln.value;
  },
  set(val) {
    //将姓跟名分开
    const [str1, str2] = val.split('-')
    fn.value = str1;
    ln.value = str2;//计算出来的也是一个ref属性
    // console.log('set',val)//这里的val就是lishi
  }
})
function changeName() {
  // fullName 还是一个响应数据ref 

  fullName.value='li-shi'
}
//方法没有缓存 使用了就会调用
function fullName2(){
  return fn.value.slice(0, 1).toUpperCase() + fn.value.slice(1) + '-' + ln.value;

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
