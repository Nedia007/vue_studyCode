<template>
  <Person v-if="isShow"/>

</template>

<script lang='ts' setup name="App">
import Person from './components/Person.vue';
import {ref,onMounted} from 'vue'
let isShow = ref(true)
//挂载完毕
onMounted(() => {
  console.log('父挂载完毕');
})
//子先挂载，因为先导入了person，最后再挂载父（APP是最后挂载的）
</script>

