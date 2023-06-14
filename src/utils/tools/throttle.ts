/**
 * 节流函数 不支持传参
 * @param cb 回调函数 
 * @param delay 多少毫秒执行一次
 * @param context 上下文
 */
export default function throttle (cb: any, delay: number, context: any = window) {
  let timer: number | null = null
  return function () {
    if (timer === null) {
      cb.call(context)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}