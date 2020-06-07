/**
 *  判断是否为数字
 *
 * @param {*} n
 */
const validateNumber = n=> {      // isFinite(val) 检测val参数是否无穷大 
  // 包装类型  isNaN
  return  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
}


console.log(validateNumber(123));
console.log(validateNumber(true));
console.log(validateNumber('hello'));
console.log(validateNumber({a:"hello"}));
console.log(validateNumber(null));
console.log(validateNumber(undefined));
// console.log(validateNumber(NAN));