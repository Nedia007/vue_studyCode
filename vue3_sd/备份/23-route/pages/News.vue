<!-- parmas参数 -->
  <div class="news">
      <!-- 导航区 -->
      <ul>
        <li v-for="item in NewsList" :key="item.id">
          <button @click="showNewsDetail(item)">查看新闻</button>
          <!-- 路由传参数  模板字符串传值 第一种写法-->
          <!-- <RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">{item.title}</RouterLink> -->
          <!-- 第二种写法 只能用name，用path会报错 ；必须要在定义是占位-->
            <!--不能传对象 会报错  -->
          <RouterLink
            :to="{
              name:'xiang',
              params:{
                id:item.id,
                title:item.title,
                content:item.content
              }
            }"
            ></RouterLink>
        </li>
      </ul>
      <!--展示区  -->
      <div>
        <RouterView></RouterView>
      </div>
  </div>
  </template>
  <!-- query写法 -->
 <!-- <template>
    <div class="news"> -->
      <!-- 导航区 -->
  <!-- <ul> -->
        <!-- <li v-for="item in NewsList" :key="item.id"> -->
          <!-- 路由传参数  模板字符串传值 第一种写法-->
          <!-- <RouterLink :to="`/news/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{item.title}</RouterLink> -->
          <!-- 第二种写法 -->
          <!-- <RouterLink 
          :to="{
         
            path: '/news/detail',
            query: {
              if: item.id,
              title: item.title,
              content:item.content
            }
          }">
            {{ item.title }}
          </RouterLink>
        </li>
      </ul> -->
  <!--展示区  -->
  <!-- <div>
        <RouterView></RouterView>
      </div>
  </div> -->
  <!-- </template>  -->
<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterView ,RouterLink,useRouter} from 'vue-router';
const NewsList = reactive([
  { id: "asdsadsa", title:"抗癌", content: '西兰花' },
      { id: "asdsadsa2", title:"抗癌", content: '西兰花1' },
      { id: "asdsadsa3", title:"抗癌", content: '西兰花2' },
      { id: "asdsadsa4", title:"抗癌", content: '西兰花3' },
])
const router = useRouter();
interface NewsInter{
  id: string,
  title: string,
  content:string
}
function showNewsDetail(item: NewsInter) {
  //to怎么写，push里面就可以怎么写
  router.push({
    name: 'xiang',
    params: {
      id: item.id,
      title: item.title,
      content: item.content
    }
  })
    }
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>