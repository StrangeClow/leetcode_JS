/**
 *   给定一个整数数组nums   请你返回其中位数为偶数的数字的个数 
 * 
 *  input ====>  [12,345,6,7,7898] 
 *  ouput ====> 2
 * 
 * 
 * @param {*} arrs
 * @returns
 */
const findNumbersInEven = function(arrs) {
   
     return arrs.filter((item,index)=> {
         // 数组的每一项转化为字符串并取余
         console.log(item,index);
         // length == 0 
         return item.toString().length % 2 === 0

     }).length
}




let n1 = [12,345,6,7,7898] 
console.log(findNumbersInEven(n1));