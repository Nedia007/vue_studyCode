import { ref, reactive, onMounted, computed } from 'vue'


export default function () {
  let sum = ref(0);
  let bigSum = computed(() => {
    return sum.value + 100;
  })
  //方法
  function add() {
    sum.value += 10;
  }
  // 钩子
  onMounted(() => {
    //一加载就加了10
    add()
  })
  return { sum, add, bigSum }
}