/**
 *  取最大的n个值 
 *
 * @param {*} arr
 * @param {number} [n=1]     
 */




const maxNumber2 = function(arr, n = 1) {
  // 按从大到小排序后 截取最大的n个值  
  return [...arr].sort((a,b)=> {
       return b - a
   }).slice(0,n)
}

console.log(maxNumber2([1,2,3,4,5,67,89]));
console.log(maxNumber2([1,2,3,4,5,67,89,990],3));

const maxNumber3 = function(arr, n = 1) {
  // 命令函数 传入给sort(func)
  let a = function(a,b) {
      return b - a
  }
  
  // 传入一个function 
  return [...arr].sort(a).slice(0, n)
  
   
  //  arr.slice(start, end)    // 截取指定区间 
}

console.log(maxNumber3([1,2,3,4,5,6,7],3));