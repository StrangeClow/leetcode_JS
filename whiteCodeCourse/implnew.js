/**
 *   实现new 
 * 
 *     分析主要的实现过程
 *         1. 创建一个新对象
 *         2. 将构造函数中的this指向该对象
 *         3. 执行构造函数(给新对象添加属性和方法)
 *         4. 返回新对象
 *
 */
const implNew = function() {
    // 新创建一个新对象
   let tempObj = new Object()

   // 改变指向
   let Constructor = [].shift.apply(arguments)
   tempObj._proto_ = Constructor.prototype
   // 取的构造函数的返回值
   let res = Constructor.apply(tempObj, arguments)
  
   // 返回当前数据值
   //  若当前返回值是一个对象就返回该对象，否则就返回构造函数的实例对象
   return typeof res === 'object' ? res : tempObj

}