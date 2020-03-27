
/**
 * 检查所有的数组元素是否相等
 * 
 * Array.prototype.every()
 * 
 * every本身的特性 
 * 
 *    every()
 *  
 *       1. 不创建新数组
 *       2. 不改变原数组
 *       3. 输出的是判断为false则马上跳出循环并return为false
 *       4. 
 * 
 *
 * @param {*} arr
 */

const allEqual = arr=> {
  return  arr.every(val => val === arr[0])
}


console.log(allEqual([1,1,1,1,2]));
console.log(allEqual([1,1,1,1,1]));