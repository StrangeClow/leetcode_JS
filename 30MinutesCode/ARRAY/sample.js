/**
 *   从数组中随机返回一个元素    X  
 *
 * @param {*} arr
 * @returns
 */
const sample = function(arr) {
  
  // 取整 随机 
  console.log('返回的索引====》',Math.floor(Math.random() * arr.length));
  return arr[Math.floor(Math.random() * arr.length)]  // 

} 

console.log(sample([12,34,345,67,0]));