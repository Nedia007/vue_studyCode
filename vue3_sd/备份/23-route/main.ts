
import { createApp } from 'vue'//创建应用 花盆
import App from './App.vue'//组件 根
// 引入路由
import router from './router'

const app = createApp(App)

// 使用路由器
app.use(router)
//挂载应用到app中
app.mount('#app')//创建前端应用 把组件放进去 ，成果放在#app
