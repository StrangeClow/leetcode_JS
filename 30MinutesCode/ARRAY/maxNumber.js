/**
 *  取最大的n个值 
 *
 * @param {*} arr
 * @param {number} [n=1]     
 */




const maxNumber2 = function(arr, n = 1) {
  return [...arr].sort((a,b)=> {
       return b - a
   }).slice(0,n)
}

console.log(maxNumber2([1,2,3,4,5,67,89]));


const maxNumber3 = function(arr, n = 1) {
  let a = function(a,b) {
      return b - a
  }
  
  // 传入一个function 
  return [...arr].sort(a).slice(0, n)
  
   
  //  arr.slice(start, end)
}

console.log(maxNumber3([1,2,3,4,5,6,7],3));