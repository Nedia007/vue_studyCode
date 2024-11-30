import { createApp } from 'vue'
import App from './App.vue'

// 创建应用
const app = createApp(App)

// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app')