/**
 *  函数节流 防止频繁操作 （一定时间段内只执行一次 ）
 * 
 *   节流与防抖的区别 侧重点是那些 
 *
 * @param {*} cb  回调函数
 * @param {*} ms  毫秒数
 * @returns
 */
const throttle = function(cb, ms) {
    let timer = null
    
    let throttleFunc = function() {
       // 清除定时器  
       clearTimeout(timer)

       timer = setTimeout(() => {
           // 回调函数改变指向
           cb.apply(this, arguments)
           
       }, ms);
    }

    return throttleFunc 
}


const throttle2 = function(callback, ms) { 

    let timer = null

    return function() {
        // 清楚定时器 
        clearTimeout(timer)

        timer = setTimeout(()=> {
            
             callback.apply(this,arguments)
        },ms)
    }
}