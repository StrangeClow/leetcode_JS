/**
 *  根据要求把数组中指定的数据去除后并返回 
 *
 * @param {*} arr
 * @param {*} args
 * @returns
 */
const without = function(arr, ...args) {   //  参数转
  console.log('剩余参数==',args)
  // filter()过滤  
  // includes() 是否包含  
  // return arr.filter((item,index)=> !args.includes(item))

  return arr.filter((item, index)=> {
    // 循环当前数据集合 拿到非目标值并返回 
    return !args.includes(item)
  })
}




console.log(without([1,2,3,4,5,6,7,8],2,5,3))

let n = '1,2,3,4,5,6,7'
console.log(...(n));



const without2 = function(arr, ...nums) {
  // 在指定arr数组中 排出nums
  let res = []
   for(let i = 0; i < arr.length; i ++) {
       if(!nums.includes(arr[i])) {
         res.push(arr[i])
       }
   }
   return res
}

console.log(without2([1,2,3,4,5,6,7,8],2,5,3))