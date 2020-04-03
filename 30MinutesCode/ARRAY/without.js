/**
 *  从给定数组中排出指定值  
 *
 * @param {*} arr
 * @param {*} args
 * @returns
 */
const without = function(arr, ...args) {
  console.log('剩余参数==',args)
  // filter()过滤  
  // includes() 是否包含  
  return arr.filter((item,index)=> !args.includes(item))
}




console.log(without([1,2,3,4,5,6,7,8],2,5,3))