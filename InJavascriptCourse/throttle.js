/**
 *  函数节流 防止频繁操作
 *
 * @param {*} cb  回调函数
 * @param {*} ms  毫秒数
 * @returns
 */
const throttle = function(cb, ms) {
    let timer = null
    const ctx=  this
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(cb.bind(ctx,...args),ms)
    }
}