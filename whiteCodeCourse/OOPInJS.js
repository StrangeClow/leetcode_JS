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

//  工厂模式
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


//  构造函数模式      1. 使用this的上下文对象    2. 不显式创建对象 
function Animal(name) {
   this.name = name
   this.sayName = function(name) {
      return `hello i am ${name}`
   }
   this.sayName1 = function() {
      return `hello this is ${this.name}`
   }
}

let cat = new Animal()
console.log(cat.sayName('大猫'))
console.log(cat.sayName('小猫'))



//  工厂模式
function createperson(name,age,sex) {
   this.name = name
   this.age = age
   this.sex = sex

   this.eat = function(name) {
      return `i am hungry, i want to eat ${name}`
   }
   return this
}

let p2 = createperson('youtube',18,0)
console.log('p2===',p2.eat('apple'))






// es6方式 
class Person{
   constructor(name, age) {
       this.name = name
       this.age= age
   }
   static getAge(age) {
      return age               
   }
   getFullName() {
      return `我的名字 ${this.name}`
   }
}

let p = new Person('vs code',18)
console.log(Person.getAge(12));
console.log(p.getFullName());






//  原型模式  prototype
function House() {}
House.prototype.name = '上海中心大厦'
House.prototype.address = '上海浦东新区'
House.prototype.goTo = function(trans) {
   console.log('原型模式',this)
   return `去那坐${trans}`
}
House.prototype.height = function(h) {
   console.log(`楼高${h}米`)
}

const h1 = new House()
console.log(h1)
console.log(h1.address)
console.log(h1.goTo('地铁'))
let h2 = new House()
console.log(h2.height('660'))
console.log(h1.goTo === h1.goTo)




//  组合模式 
function Fruit(name) {
  this.name = name
}

Fruit.prototype.fruitName = function() {
   console.log(this)
}


/**
 *   使用new创建实例
 *      1. 创建临时变量，可以使用this访问这个临时变量
 *      2. return临时对象
 *      3. 指定原型prototype
 *      4. 创建实例，绑定原型
 */
let f1 = new Fruit('apple')
console.log(f1)
