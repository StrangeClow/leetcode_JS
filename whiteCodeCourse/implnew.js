/**
 *   实现new 
 * 
 *     分析主要的实现过程
 *         1. 创建一个新对象
 *         2. 链接原型  （新创建对象的_proto_属性值设为构造函数的prototype属性值）
 *         3. 绑定this （构造函数中的this指向新对象并且调用构造函数）
 *         4. 返回新对象
 *
 */
const implNew = function() {
    // 新创建一个新对象
   let tempObj = new Object()

   // 改变指向   Array.prototype.shift.apply()
   let Constructor = [].shift.apply(arguments)
   //    _proto_
   tempObj._proto_ = Constructor.prototype
   // 取出构造函数的返回值
   let res = Constructor.apply(tempObj, arguments)
  
   // 返回当前数据值
   //  若当前返回值是一个对象就返回该对象，否则就返回构造函数的实例对象
   return typeof res === 'object' ? res : tempObj

}






const implNew2 = function() {

    // 拿到当前函数的参数 
    let fn = Array.prototype.shift.call(arguments)     
    
    // 创建当前对象的副本 
    let tempObj = Object.create(fn.prototype)
    
    // 改变this指向
    let changeThis = fn.apply(tempObj, arguments)
    
    // 验证给定变量的类型 
    return typeof changeThis === 'object' ? changeThis : tempObj
}




const implNew3 = function(con, ...args) {
   
    let obj = Object.create(CON.prototype)
    let result = con.apply(obj, args)
    return typeof obj == 'object' ? result : obj
}