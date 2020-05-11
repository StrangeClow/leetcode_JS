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
    console.log('RProto==',RProto)
    LProto = left._proto_;    // 取左表达式的隐式类型
    console.log('LProto==',LProto)

    let a = 'hello'
    console.log('hello1===',a._proto_)
    console.log('hello2===',a.prototype)

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


let m = [1,2,3]
console.log(IMPLinstanceof(m, Array))


/**
 *
 *
 * @param {*} leftType
 * @param {*} rightType
 * @returns
 */
const IMPLinstanceof2 = function(leftType, rightType) {
    // ._proto_
    while(leftType) {
        leftType = leftType._proto_
        if(leftType === rightType.prototype) {
           return true
        } 
        return false
    }
}


let n = [1,2,3]
console.log(IMPLinstanceof2(n, Array))