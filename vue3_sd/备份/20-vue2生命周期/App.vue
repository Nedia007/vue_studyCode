<template>
  <Person a="hahah" :list="personList" />

</template>

<script lang='ts' setup name="App">
import Person from './components/Person.vue';
import { reactive } from 'vue'
import { type Persons } from './types';
let personList= reactive<Persons>([//使用这种方式规范类型跟检查
  { id: 'sdasd1', name: '李四', age: 11 },
  { id: 'sdasd1', name: '李四1', age: 11 },
  { id: 'sdasd1', name: '李四2', age: 11 },
  { id: 'sdasd1', name: '李四3', age: 11,x:11 }
  
])
</script>

