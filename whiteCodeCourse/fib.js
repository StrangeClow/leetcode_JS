function fib(n) {
  if(typeof n !== 'number') {
    throw new Error('输入的数据类型非法')
  }
  if(n >=0 && n < 2) {
    console.log('a');
     return n
  }
  return fib(n-1) + fib(n-2)
}


console.log(fib(2));
console.log(fib(3));
console.log(fib(6));


// 函数声明会被提升  函数表达式不会被提升  




/**   
 * 
 *   优化斐波那契数列问题  
 *      采用动态规划  
 *          1. 由底向上分解问题
 *          2. 通过变量已经计算过的解
 * 
 *      尾递归
 * 
*/ 