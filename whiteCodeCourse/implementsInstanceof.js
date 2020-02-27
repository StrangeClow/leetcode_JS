/**
 *    手动实现instanceof
 *
 * @param {*} left   左表达式
 * @param {*} right  右表达式
 * @returns
 * 
 *   eg： a instanceof B      
 *        检测a的原型链上是否有B.prototypr 若有则返回true 否则返回false 
 * 
 */
const IMPLinstanceof = function(left, right) {
    let RProto = right.prototype   // 取右表达式的显示类型
    LProto = left._proto_;    // 取左表达式的隐式类型
    while(true) {
       if(left === null) {
           return false
       }
       if(RProto === LProto) {  // RProto当显式原型严格等于 LProto  返回true
          return  true
       }
       LProto = LProto._proto_
    }
}