/**
 *   斐波那契数列 
 *      
 *     三元表达式判断  
 *   
 *      1. 对n的分析  A. 小于0  B. 小于等于1  C.大于1
 *
 * @param {*} n
 */
const factorial = n => 
   
    n < 0 ? 

      (() => {

          throw new Error('negative numbers are not allowed!')
      })()

      : n <= 1 ? 

      1 : n * factorial(n - 1)