Function.prototype.implApply = function(ctx, args = []) {   // 与call的区别  数组 一个一个的值
   
    // 将方法挂载到我们传入的上下文 
    ctx.fn = this
    
    // 拿到当前调用函数的值  
   const res =  ctx.fn(...args) 
   
    // 删除当前属性
    delete ctx.fn
    
   return res
}


let n = [56,21,236,0,0.1,454545]
console.log(Math.max.implApply(this,n))

