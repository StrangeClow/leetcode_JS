/**
 *   两整数之和  
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