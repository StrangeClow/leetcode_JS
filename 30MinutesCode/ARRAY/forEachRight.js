/**
 * 逆序为数组元素执行一次提供的函数 
 *
 * @param {*} arr
 * @param {*} callback
 */
const forEachRight = (arr, callback) => 
  // arr.slice(0) 复制数组
   arr.slice(0)
   // 反转
   .reverse()
   // 循环走回调
   .forEach(callback)



console.log(forEachRight([1,2,3,4,5],val=> console.log(val)));   