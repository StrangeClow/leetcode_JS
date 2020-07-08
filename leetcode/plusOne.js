/**
 * 题意：给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上+1
 * 最高位数字存放在数组的首位，数组中的每个元素只存储一个数字
 * eg: input==> [1,2,3]  output ==> [2,3,4]
 *
 * @param {*} digits
 * @returns
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) { // 倒序
      if (digits[i] < 9) {    //只计算一位 单
        digits[i]++;  // +1
        return digits; 
      }
      digits[i] = 0;
    }
    return [1, ...digits];  // es6扩展运算
  };


  /**
   *   加1
   *
   * @param {*} digit
   * @returns
   */
  const plusOne2 = function(digit) {    // 有问题 需更新
    for(let i = 0; i < digit.length; i ++) {
        // 取数组最后一位 
        if(i === (digit.length - 1)) {
            // arr.length -1的值 + 1
             digit[i] = digit[i] + 1
        }
    }
    return digit
  }


let a1 = [2,3,4]
let a2 = [3,5,7,8]
let a3 = [4,3,2,1]
// console.log(plusOne(a1));
console.log(plusOne2(a2));
console.log(plusOne2(a3));
