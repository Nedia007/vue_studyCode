<template lang="">
  <div class='person'>
   <h2>当前求和为：{{sum}}};放大十倍后：{{bigSum}}</h2>
   <button @click="add">点我sum+1</button>
   <hr></hr>
   <img v-for="dog in dogList" :src="dog" :key="index" alt="">
   <br>
   <button @click="getDog">再来一只小狗</button>

  </div>
</template>

<script  lang="ts" setup name="Person">
import useDog from '@/hooks/useDog'
import useSum from '@/hooks/useSum'

const { sum, add, bigSum } = useSum()
const { dogList, getDog } = useDog()
</script>
<style scoped>
/*局部样式 scoped*/
    .person {
      background-color: #dddddd;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
    }
    button {
      margin:0 5px;
    }
    img{
      height: 100px;
      margin-right: 10px;
    }
</style>
