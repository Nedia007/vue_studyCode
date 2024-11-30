import { customRef } from "vue";
export default function (initValue: string, delay: number) {

  // 使用Vue提供的customRef定义响应式数据

  let timer: number
  // 一般会把自定义ref封装成ref
  let msg = customRef((track, trigger) => {
    return {
      // msg被读取时被调用
      get() {
        // 告诉Vue数据msg很重要，需要对msg持续关注，一旦msg变化，就去更新
        track();
        return initValue;
      },
      // set何时调用  msg被修改时
      set(value) {
        // 先清除定时器
        clearTimeout(timer)
        timer = setTimeout(() => {
          //  value是修改的最新值
          console.log('set', value)
          initValue = value;
          trigger();//通知Vue  数据msg变化了 就会同步数据
        }, delay)//一秒后再更新

      }
    }
  })
  return msg;
}
