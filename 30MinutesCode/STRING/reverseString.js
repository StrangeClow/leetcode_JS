/**
 *  先取出来值在反转在转化为字符串
 *
 * @param {*} str
 */
const reverseString = str => [...str].reverse().join('')


let a1 = 'good luck to me'
console.log('反转字符串===',reverseString(a1));

const reverseString2 = function(str) {
   let tempStr = str.split('')
   console.log(tempStr);
  return tempStr.reverse().join('')
}

let a2 = 'documenttext'
console.log(reverseString2(a2));



/**
 *    双指针写法   不再单纯使用数组或字符串的api 
 *
 * @param {*} str
 */
const reverseString3 = function(str) {
   
    // 表明左右的区间 
    let right = 0
    let left = str.length - 1

    while(right < left) {
        console.log('输出字符====>',str[left],str[right]);
        // 交换字符位置  es6解构赋值
      [str[right],str[left]] = [str[left],str[right]]
       right ++
       left --
       
    }
    return str
}

let a3 = 'leetcode'
console.log(reverseString3(a3));