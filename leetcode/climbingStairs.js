/**
 * 题意：  你正在爬楼梯，需要N步才能到达顶部
 * 每次你可以爬1或者2个台阶，求共有多少种方式
 * 
 * 思路： 递归或者动态规划    斐波那契数列问题      fib(n -1) + fib(n - 2)
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
      while(n-- > 0) {
        //   b += a    // 或者采用es6的解构赋值  [a, b] = [b, a + b];  
        //   a = b-a 
          [a,b] = [b, a + b]
      }
      return a
}


let n1 = 5
let n2 = 3
console.log(clibmStairs(n1));
console.log(clibmStairs(n2));



const clibmStairs2 = function(n) {     // 动态规划 1.最优子问题 2. 边界条件   3.状态转移方程
    
    // 来源于leetcode (https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/)

   //  声明dp
    const dp = [];
    dp[0] = 1
    dp[1] = 1
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]

}

let n3 = 4
let n4 = 5 
console.log(clibmStairs2(n3));
console.log(clibmStairs2(n4));
console.log(clibmStairs2(6));