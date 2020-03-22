/**
 *    函数防抖 （间隔一定时间后才会执行）
 *
 * @param {*} func
 * @param {*} delay
 */
const debounce = function(func, delay) {
  // 定义区间  
  let timer= null

  let delayFun = function() {
      if(timer) {
          clearInterval(timer)
      }
      timer = setTimeout(() => {

         func.apply(this, arguments)  
      }, delay);

  }

  return delayFun
}