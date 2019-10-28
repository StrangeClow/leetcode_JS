/** *
 * 
 *    pollify      
 * 
 *    下次再继续研究这个   学个思路再   哈哈 
 * 
 */

Function.prototype.myBind = function(thisArgs) {
    if(typeof this !== 'function') {
        return
    }
    let that = this
    let args = Array.prototype.slice.call(arguments,1)   // call利用数组的方法
    var fnNullFun = function() {}   // 定义一个空函数
    var fnBound = function() {
        var _this = thas instanceof that ? this : thisArgs
        return that.apply(_this, args.concat(Array.prototype.slice.call(arguments)))  // apply与其他改变this指向的区别
    }
    // 
    if(this.prototype) {  
     fnNullFun.prototype = this.prototype
    }
    fnBound.prototype = new fnNullFun()      // 一个对象的原型等于构造函数
    return fnBound
}
