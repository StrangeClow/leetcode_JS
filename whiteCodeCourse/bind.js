/** *
 * 
 *    pollify      
 * 
 *    下次再继续研究这个
 * 
 */

Function.prototype.myBind = function(thisArgs) {
    // 当前this非function类型
    if(typeof this !== 'function') {
        return
    }
    let that = this
    // arr.prototype.functionName.call()
    let args = Array.prototype.slice.call(arguments,1)   // call利用数组的方法
    var fnNullFun = function() {}   // 定义一个空函数
    var fnBound = function() {
        var _this = that instanceof that ? this : thisArgs
        return that.apply(_this, args.concat(Array.prototype.slice.call(arguments)))  // apply与其他改变this指向的区别
    }
    // 
    if(this.prototype) {  
     fnNullFun.prototype = this.prototype
    }
    fnBound.prototype = new fnNullFun()      // 一个对象的原型等于构造函数
    return fnBound
}



Function.prototype.ImplBind = function(context) {

    let that = this   // 保存原函数 

        context  = [].shift.call(arguments)   // 需要绑定的this上下文   // shift()移除数组的第一个元素并返回 

        args = [].slice.call(arguments)   //  剩余参数转化为数组 

    return function() {
        // apply(a,b)  a==> this    b===> 参数数组
        return that.apply(context,[].concat.call(args, [].slice.call(arguments)))
        // 执行新的函数时，会把之前传入的context当做函数体内的this 
        // 并结合两次分别传入的参数 作为新函数的参数  

    }
}