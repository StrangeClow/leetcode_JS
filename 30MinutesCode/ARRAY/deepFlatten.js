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


 const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

var deepFlattenTwo = function(arr) {
  var result = []
  for (let index = 0; index < arr.length; index++) {
      // 判断是不是数组 
      if(Array.isArray(arr[index])) {
         result = result.concat(deepFlattenTwo(arr[index]))    // 递归调用自身
      } else {
          result.push(arr[i])   // 不是数组  证明是单个数据  push添加
      }
  }
  return result
}






 console.log('变种扁平化数组==>',deepFlattenTwo([1, [2], [[3], 4], 5]));
console.log(deepFlatten([1,[9,[88,[485]]], [2], [[3], 4], 5]))
    