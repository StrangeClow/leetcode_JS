/**
 * 题意：  你正在爬楼梯，需要N步才能到达顶部
 * 每次你可以爬1或者2个台阶，求共有多少种方式
 * 
 * 思路： 递归或者动态规划
 *
 * @param {*} n
 * @returns
 */
const clibmStairs = function(n) {
  let a = 1, 
      b = 1
      while(n -- > 0) {
          b += a    // 或者采用es6的解构赋值  [a, b] = [b, a + b];  
          a = b-a 
      }
      return a
}