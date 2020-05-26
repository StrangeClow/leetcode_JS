function fib(n) {
  if(typeof n !== 'number') {
    throw new Error('输入的数据类型非法')
  }
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