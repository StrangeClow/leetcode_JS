/**
 *  移除事件侦听器 
 *
 * @param {*} el 参数 event.target
 * @param {*} event 事件名 
 * @param {*} fn  函数
 * @param {boolean} [opts=false]   / 是否冒泡
 */
const off = function(el, event, fn, opts = false) {
  //removeEventLisener()
  return   el.removeEventLisener(event, fn, opts)
}