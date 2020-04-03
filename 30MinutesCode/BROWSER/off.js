/**
 *  移除时间侦听器 
 *
 * @param {*} el 参数 event.target
 * @param {*} event 事件名 
 * @param {*} fn  函数
 * @param {boolean} [opts=false]   / 是否冒泡
 */
const off = function(el, event, fn, opts = false) {
  el.removeEventLisener(event, fn, opts)
}