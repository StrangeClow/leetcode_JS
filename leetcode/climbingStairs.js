/**
 * 题意：  你正在爬楼梯，需要N步才能到达顶部
 * 每次你可以爬1或者2个台阶，求共有多少种方式
 * 
 * 思路： 递归或者动态规划    斐波那契数列问题  
 * 
 * 
 *  每一层 = 前一层数据 + 前两层的数据
 * 
 * 动态规划有时被认为是一种与递归相反的技术。
 *
 * @param {*} n
 * @returns
 */
const clibmStairs = function(n) {
    // 边界处理
    if(n === 1) return 1
    if(n === 2) return 2

    let a = 1, b = 1
      while(n -- > 0) {
          b += a    // 或者采用es6的解构赋值  [a, b] = [b, a + b];  
          a = b-a 
      }
      return a
}


let n1 = 5
let n2 = 3
console.log(clibmStairs(n1));
console.log(clibmStairs(n2));