function fib(n) {
  if(n >=0 && n < 2) {
     return n
  }
  return fib(n-1) + fib(n-2)
}



/**   
 * 
 *   优化斐波那契数列问题  
 *      采用动态规划  
 *          1. 由底向上分解问题
 *          2. 通过变量已经计算过的解
 * 
*/