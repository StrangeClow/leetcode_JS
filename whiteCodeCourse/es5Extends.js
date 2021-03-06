/**
 *
 *
 * @param {*} name
 * @param {*} age
 */
function Person(name, age) {
    this.name = name
    this.age = age

    this.getName = function(name) {
        return `my name is ${name}`
    }
} 

let t = new Person()
console.log(t.prototype === Person._proto_);       //   true
console.log(t._proto_ === Person.prototype);      //   false
console.log(t.getName('xiaomi'));



/**
 *   ECMASCRIPT只支持实现继承，且其继承方式主要依靠原型链来完成 
 *
 * 
 */


 
/**
 *   1. 原型链  (缺点为：共享属性的问题)
 *    
 *   实际中很少使用
 * 
 */
function Father(name) {
  this.name = name
}

Father.prototype.getName = function(name) {
  return name
} 

function Son(name) {
  console.log(name)
  this.name = `${name.split('')}`
  
}

// 继承Father
Son.prototype = new Father()

Son.prototype.getName = function() {
    return this.name
}

let s1 = new Son('hello')
// console.log(s1)
// console.log(s1.getName('world'))
 



/**
 *   2. 借用构造函数（伪造对象或经典继承）
 *   在子类型构造函数的内部调用超类型构造函数，  通过apply()或call()在新创建的构造函数上执行构造函数
 * 
 */
function Fruit() {
  this.fruits = ['apple','banna','watermalen']

  this.getFruitName = function(name) {
    return ` 这是  ${name}`
  }
}

function Apple() {
  // 改变this指向 继承Fruit
  Fruit.call(this)
}

let a1 = new Apple()
a1.fruits.push('water')
console.log(a1.getFruitName('菠萝菠萝'))


function Super() {
  this.colors = ['red','blue','green']
}
function Sub() {
    // 改变指向继承   
    Super.call(this)
}
 
let s2 =  new Sub()
console.log('0524===>',s2.colors.push('yellow'));
console.log('0524====>',s2.colors);



/**
 *   3. 组合继承(伪经典继承)
 *   使用原型链来实现对属性和方法的继承，借用构造函数来实现对实例属性的继承 应用最多的方式
 * 
 */
 function Phone(name,type) {
    this.name = name
    this.type = type
 }

 Phone.prototype.getType = function(name,type) {
   return ` 这是 ${name}，属于${type}`
 }

 function xiaomi(name, type) {
   // 当前属性继承自Phone父类
   Phone.call(this, name)
   this.type = type
 }

 // 继承方法
 xiaomi.prototype = new Phone()
 xiaomi.prototype.constructor = Phone
 xiaomi.prototype.getPhoneName = function() {
  return `这是自身来的手机${this.type}`
 }

 let x1 = new xiaomi('魅族','16s')
 console.log(x1.getType('小米',10))
 console.log(x1.getPhoneName('jkjk'))

 
/**
 *   4. 原型式继承
 *
 *   Object.create() 原型式继承 
 */


 
/**
 *   5. 寄生式继承
 *   创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后在像真的做了所有的工作一样返回对象
 * 
 */
 
 function createPerson(info) {
   //通过调用函数创建一个新对象
    let obj = object(info)
    obj.getNmme = function(name) {
      return name
    }
    //
    return obj
 }
 
/**
 *   6. 寄生组合式继承
 *   借用构造函数来继承属性，通过原型链的混合形式来继承方法，不需要为子类指定原型二调用父类的构造函数，
 * 仅需要父类原型的一个副本
 * 
 */

 function inheritPrototype(Female, Person) {
   var protoType = object.create(Person.prototype)
   protoType.constructor = Female
   Female.prototype = prototype
 }

 // 取代如下内容
 Female.prototype = new Person()
 Female.prototype.constructor = Female


 //  

 inheritPrototype(Female,Person)
 Female.prototype.sayAge = function() {
   return `${this.name} ${this.age}`
 }

 var fm = new Female('js','java',10)
 fm.sayAge()








 // 视频教程

 function Food() {
   this.type = type
 }

 Food.prototype.getType = function() {
   return `类型为==${this.type}`
 }

 function vegetables(name) {
   this.name = name 
 }


 vegetables.prototype = new Food()

 const tomato = new vegetables('tomato')

 console.log(tomato.getType())