/**
 * 题意：给定一个由整数组成的非空数组所表示的非负整数，在该书的基础上+1
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