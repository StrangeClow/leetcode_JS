/**
 *  扁平化数组 
 *
 * @param {*} arr
 */
// const deepFlatten = arr => {
//     // [].concat(...arr.map((item,index)=> {
//     //     Array.isArray(item) ? deepFlatten(item) : item
//     // }))
//      [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// }


 /**
  *    方法1  
  *    
  *        Array.isArray
  * 
  *        reduce 
  * 
  *        ... 扩展运算符  展开值
  * 
  *       递归
  * 
  *
  * @param {*} arr
  */
 const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

let a = [1,2,[3,[29]],4,5,[8,9,[17]]]
console.log('扁平化数组=====>',deepFlatten(a))


/**
 *
 *  方法2  
 *  
 *
 * @param {*} arr
 * @returns
 */
var deepFlattenTwo = function(arr) {
  var result = []
  for (let index = 0; index < arr.length; index++) {
      // 判断是不是数组 
      if(Array.isArray(arr[index])) {
         result = result.concat(deepFlattenTwo(arr[index]))    // 递归调用自身往回走
      } else {
          result.push(arr[index])   // 不是数组  证明是单个数据  push添加
      }
  }
  return result
}





let a3 = [1,2,[3,[29]],4,5,[8,9,[17]]]
 console.log('变种扁平化数组==>',deepFlattenTwo([1, [2], [[3], 4], 5]));
 let a1 = [1,[9,[88,[485],],], [2], [99,[3], 4], 5]
 let a2 = [1,[9,[5,[6]]],8,10]
console.log(deepFlatten(a2))



/**
 *   扁平化数组 
 *
 * @param {*} arr
 * @returns
 */
const deepFlatten3 = function(arr) {      // 对比深度复制 对象 
  
  let res = []
  // 1. 先处理边界情况
  if(!Array.isArray(arr)) return

  // 单层数组
   arr.forEach((item,index)=> {
     if(Array.isArray(item)) {
       console.log('当前子项继续往下一层===',item)
       // 递归再走一遍 
       res =  res.concat(deepFlatten3(item))   // 循环依次 解构一层              // concat()和push()的区别 
     } else {
      
       res.push(item)
     }
   })
  return res
}
    

let a4 = [1,[9,[5,[6,[98]]]],8,10]
console.log(deepFlatten3(a4))




console.log([1,2,3,4].slice(1))    // 删除第一位 
