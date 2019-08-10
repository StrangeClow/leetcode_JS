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
  while(rex*rex > x) {
      res = parseInt((res+ x/ res) / 2 )
  }
  return res
}