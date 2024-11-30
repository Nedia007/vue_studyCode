//创建一个路由器并暴露出去
// 1.引入
import { createRouter, createWebHistory } from 'vue-router'
// 2.创建路由器
// 引入一个个可能要呈现的组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@pages/Detail.vue";
const router = createRouter({
  history: createWebHistory(),//路由器的工作模式  /

  routes: [{//路由规则
    name: 'zhuye',
    path: '/home',
    component: Home
  }, {
    name: 'xinwen',
    path: '/news',
    component: News,
    children: [{//子路由
      name: 'xiang',
      path: 'detail/:id/:title/:content?',//子集不用写/ ?表示可选
      component: Detail,//路由组件
      // 写法一：将路由的所有的Params参数作为props传给路由组件 也就是只有params能用
      props: true,
      // 第二种写法：函数式写法，自己定义将什么作为props传给路由组件
      // props(route) {
      //   console.log(route) //这个就是返回一个路由
      //   // return route.query  //query的时候要这样写
      // }
      // 第三种写法：对象写法，可以自己觉得将什么作为Props给路由组件
      // props: {
      //   a: 100,
      //   b:50
      // }

    }]
  }, {
    name: 'guanyu',
    path: '/about',
    component: About
  }, {
    path: '/',
    redirect: '/home',//重定向，一上来就是home页面
  }
  ]
})
// 暴露
export default router