/**
 *
 *
 * @param {*} context
 * @returns
 */
Function.prototype.imitateCall = function(context) {     // context为当前上下文环境
  // 若this类型不是一个function  抛异常
  if(typeof this !== 'function') {   
     throw new TypeError('type error')
  }          
  // 当前执行上下文 || 全局     
  context = context || window    // 短路运算   context没有 则为window  // node环境下没有window
  context.fn = this  // 创建一个fn属性 并将值设置为需要调用的函数
  // 取出所有的函数入参  slice(1)删除收个元素 并返回后续元素 
  const args = [...arguments].slice(1)   
  
  const result  = context.fn(...args)  // 执行当前函数 
  console.log('result===',result);
  delete context.fn   // 删除添加的属性  obj.delete()
  return result
}






let n = [1,2,3,4,5]
console.log(Math.max.apply(null,n));
console.log(Math.max.call(null,1,2,3,4,5,6));
console.log(Math.max.imitateCall(null,1,2,3,4,5,6,999));



let n = [1,2,3,4]
console.log(n.slice(1));