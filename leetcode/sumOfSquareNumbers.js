/**
 *   平方数之和 
 * 
 *  题意： 给定一个非负整数才 判断是否存在两个整数A B使得 a^2 + b^2 = c
 * 
 *  
 *
 * @param {*} c
 * @returns
 */
var judgeSquareSum = function(c) {
    // 先取的数字c的开方然后取整
    let m = parseInt(Math.sqrt(c))
    // 循环遍历 直到该数字减去i的平方然后判断其是否是整数，是则返回true  否则  false
     for(let i= m; i>-1; i--)
         {   
             // Math.sqrt()
             if(Math.sqrt(c-(i*i))%1==0)
                {
                    return true
                }
        }
    return false
};


console.log(judgeSquareSum(2))      // 1^2 + 1^2 = 2
console.log(judgeSquareSum(3))




/**
 *  
 *   c = a*a + b*b
 *
 * @param {*} c
 */
const judgeSquareSum2 = function(c) {
   
    let a = 0
    // 将b开方取整
    let b = Math.floor(Math.sqrt(c))

    // 
    while(a <= b) {
    
    }
}