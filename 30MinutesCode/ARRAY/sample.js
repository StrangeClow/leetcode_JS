/**
 *   从数组中随机返回一个元素    X  
 *
 * @param {*} arr
 * @returns
 */
const sample = function(arr) {
  
  // 取整 随机 
  return arr[Math.floor(Math.random() * arr.length)]

} 