/**
 *  各位相加 ()
 *    
 *     给定一个非负整数num,反复将各个位的数字相加，直到结果为一位数。
 * 
 *   input===> 38
 *   ouput===>  2
 *   实现过程为： 3+8 = 11， 1 +1 = 2 由于2是一位数，返回2
 *
 * @param {*} num
 * @returns
 */
const addDigits = function(num) {
  
  // 循环当前数据 大于等于10
  while(num >= 10) {
    // 转字符串再转数组 
    console.log(num.toString().split(''));
      num = num.toString().split('').reduce((prev, curr)=> {
        // 累加当前值与前值并计数
        console.log(prev, curr);
        return parseInt(prev) + parseInt(curr)
      },0)
  }
  console.log(num);
  return num
}


console.log(addDigits(38));