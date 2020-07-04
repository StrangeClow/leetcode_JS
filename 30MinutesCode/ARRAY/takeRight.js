/**
 *  返回数组后n个元素 
 * 
 *    Array.slice()方法 
 *
 * @param {*} arr
 * @param {number} [n=1]
 * @returns
 */
const takeRight =  function(arr, n = 1) {
   // arr.slice(start(必须), end(可选))
   return arr.splice(arr.length - 1,n )
   return arr.slice(arr.length - n, arr.length)
}


let n = [1,2,3,4,5,6]
console.log(takeRight(n,3));