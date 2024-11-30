<template lang="">
  <div class='person'>
   
  </div>
</template>

<script  lang="ts" setup name="Person">
import { type PersonInter,type Persons} from "@/types"; //要加一个type

// let person:PersonInter ={id:'asdasd',name:'张三',age:60}

let personList:Persons = [//泛型 数组的每一项要符合泛型的规范
  { id: 'asdasd', name: '张三', age: 60 },
  { id: 'asdasd', name: '张4', age: 60 },
  { id: 'asdasd', name: '张5', age: 60 }
]
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
</style>
