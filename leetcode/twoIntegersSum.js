/**
 *   两整数之和  
 *       不适用运算符+ - 计算a b两数之和
 *    站在二进制的角度去考虑当前问题  使用或非 异或来操作  
 * 
 *   思考数据二进制的问题在解法上的应用 
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
var getTwoIntegersSum = function(a,b) {
    var temp;
    while (a !== 0) {
      temp = (a & b) << 1;  // a & b 得到所有需要进位的地方，左移一位完成进位。
      b = a ^ b;            // a ^ b 得到a与b不一样的地方，即不需要进位的地方
      a = temp;
    }
    return b;
}



const getTwoIntegersSum2 = function(num1, num2) {
 
   // 若第二个数为0 则直接返回第一个数 
  if(num2 === 0) {
     return num1
  }
  
  // 异或运算 将二进制的数转换为十进制的数 
  let sum = num1 ^ num2
  //      << 表示左移运算 
  let carry = (num1 & num2) << 1
  console.log('异或==',sum, '左移运算==',carry);
  return getTwoIntegersSum2(sum, carry)

}



console.log(getTwoIntegersSum2(1,29));