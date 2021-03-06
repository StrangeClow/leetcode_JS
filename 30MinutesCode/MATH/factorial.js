/**
 *   阶乘
 *      
 *     三元表达式判断  
 *   
 *      1. 对n的分析  A. 小于0  B. 小于等于1  C.大于1
 *
 * @param {*} n
 */
const factorial = n => 
   // n < 0 
    n < 0 ? 

      (() => {

          throw new Error('negative numbers are not allowed!')
      })()
     // n <=1  返回自身
      : n <= 1 ? 
      // 递归调用
      1 : n * factorial(n - 1)




console.log(factorial(6))      // output ===>  720  
