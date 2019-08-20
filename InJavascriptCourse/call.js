Function.prototype.imitateCall = function(context) {     // context为当前上下文环境
  if(typeof this !== 'function') {   // 若this不是一个function  抛异常
     throw new TypeError('error')
  }               
  context = context || window    // 短路运算   context没有 则为window
  context.fn = this
  const args = [...arguments].slice(1)   // 剩余参数
  const result  = context.fn(...args)
  delete context.fn   // 删除添加的属性
  return result
}