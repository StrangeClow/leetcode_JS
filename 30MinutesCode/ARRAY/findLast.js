/**
 *  Returns the last element for which 
 * the provided function returns a truthy value.
 * 
 *   返回提供的函数返回真(truthy)值的最后一个元素
 * 使用Array.filter()移除fn返回falsey值的元素
 * 
 * @param {*} arr
 * @param {*} fn
 */
const findLast = (arr, fn)=> {
  
   // pop() 返回删除的最后一个元素
  return arr.filter(fn).pop()

}


let n = [1,2,3,4,5,6]
console.log(n.pop())     // pop会改变当前数组n
console.log(n)