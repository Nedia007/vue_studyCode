<template>
  <Person />
  <!-- vue3可以多个根标签 -->
  <!-- <Person /> -->

</template>

<script lang='ts'>
import Person from './components/Person.vue';
//JS或Ts
export default {
  name: 'App',//组件名
  //注册组件
  components:{
    Person
  }
}
</script>

