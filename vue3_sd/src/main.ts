import { createApp } from 'vue'
import App from './App.vue'
import hello from './Hello.vue'
// 创建应用
const app = createApp(App)
// 全局组件
app.component('hello', hello);
// 全局属性 不推荐
app.config.globalProperties.x = 99
declare module 'vue' {
  interface ComponentCustomProperties {
    x: number
  }
}
app.directive('beauty', (element, { value }) => {
  element.innerText += value
  element.style.color = 'green'
})
// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app')