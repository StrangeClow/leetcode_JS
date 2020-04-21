/**
 *  题意： 实现int sqrt（int x）函数
 * 计算并返回x的平方根
 * x保证是一个非负整数
 *
 * @param {*} x
 * @returns
 */
var mySqrt =  function(x) {
  let res = x 
  while(res * res > x) {
      res = parseInt((res+ x/ res) / 2 )
  }
  return res
}




let n1 = 4
// output ==> 2
console.log(mySqrt(n1))



/**
 * 
 *  直接使用数学函数  
 *
 * @param {*} x
 * @returns
 */
const mySqrt2 = function(x) {
  return parseInt(Math.sqrt(x))
}


console.log(mySqrt2(2));