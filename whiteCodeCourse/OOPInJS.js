/**
 *   面向对象三大特性
 *         1. 封装
 *         2. 继承
 *         3. 多态   
 * 
 * 
 *   对象的创建
 *       1. 工厂模式
 *       2. 构造函数模式
 *       3. 原型模式
 *       4. 组合模式
 * 
 *
 * @param {*} 入参
 * @returns
 */


function createObject(name,age) {
   var o = new Object()
   o.name = name
   o.age = age
   o.sayHi = function(name) {
      return `hello ${o.name}`
   }
   return o
}

let p1 = createObject('javascript',10)
console.log(p1.sayHi());