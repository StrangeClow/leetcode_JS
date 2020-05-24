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

    let that = this

    context  = [].shift.call(arguments)   // 数组开头插入元素

    args = [].slice.call(arguments)   // 复制当前参数的副本

    return function() {
        // apply(a,b)  a==>     b===> 参数数组
        return that.apply(context,[].concat.call(args, [].slice.call(arguments)))
    }
}