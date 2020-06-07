/**
 *   请找出两个字符串中唯一的不同   
 *
 * @param {*} str1
 * @param {*} str2
 */
const findDiffFunc = function(str1, str2) {

  let code = 0

  for (const item of str1 + str2) {
     
    //    利用异或解决 将两个字符串中的所有字符异或操作，原因是在异或操作过程中，两个相同字符会变成0 ，
    //   到最后就等于目标字符串与0异或，结果还是目标字符串

    //    试了一下 咋不行 打出来的是啥 浏览器环境尝试一下


      code ^= item.charCodeAt(0)
  }
  console.log('输出code===>',code)

  return String.fromCharCode(code)
}




let a = 'helloworld'
let b = 'helloworlf'


console.log(findDiffFunc(a,b));