import { ref, reactive } from 'vue'
import axios from 'axios'
//export default 直接跟值
export default function () {
  let dogList = reactive([
    'https:\/\/images.dog.ceo\/breeds\/hound-english\/n02089973_1312.jpg'
  ])

  async function getDog() {
    // 处理异常
    try {
      let result = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.push(result.data.message)
    } catch (error) {//请求出错了
      alert('请求出错了')
    }
  }
  //向外部提供东西
  return { dogList, getDog }
}
