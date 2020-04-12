/**
 *
 *   是否可以被某个数整除 
 *       
 *       1. %模运算符
 * 
 *
 * @param {*} dividend
 * @param {*} divisor
 */
const isDivisable = (dividend, divisor) => {

 return     dividend % divisor === 0

}


console.log(isDivisable(2,1))
console.log(isDivisable(1,1))
console.log(isDivisable(3,2))