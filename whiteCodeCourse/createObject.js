//  创建对象的几种方式  


//   1.  对象字面量形式
let obj = {
    name: 'js高级',
    age: 19,
    getFullName: function() {
        return `${this.name}设计`
    }
}

console.log(obj);
console.log(obj.getFullName());



//  Object.create({},obj)

//   工厂模式 抽象创建对象的具体过程 用函数来封装特定接口创建对象

function createPerson(name, age, obj) {
  
    let o = new Object()
    o.name = name
    o.age = age
    o.obj = obj
    o.getuserInfo = function() {
        return `my name is ${o.name} i am ${o.age}`
    }
    // 返回当前对象 
    return o
}

// 多个新对象使用 
let p1 = new createPerson('好好学习',19,'正向收益')
let p2 = new createPerson('天天向上',29,'正向收益覆盖支出')
console.log(p1,p1.getuserInfo());
console.log(p2,p2.getuserInfo());



//   构造函数模式

function Animal(name, age, job) {
    
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function() {
        console.log('sayName===>',this.name, this.age);
    }
}


let a1 = new Animal('wang',12,'eer')
let a2 = new Animal('mao',13,'dfdf')
console.log(a1,a1.sayName());
console.log(a2,a2.sayName());





//   原型模式
function Foo(){}

Foo.prototype = {
    name: '原型模式',
    age: 18,
    job: 'computer enniger',
    sayName: function() {
       return `my name is ${this.name} age is ${this.age}`
    }
}

var f1 = new Foo()
console.log(f1);
console.log(f1.sayName());

console.log(f1.constructor  === Foo);



//   组合模式   组合使用构造函数模式和原型模式是创建自定义类型的最常见方式

function J(name, age, job) {
   this.name = name
   this.age = age
   this.job = job
}

J.prototype =  {
    constructor: J,
    sayName: function() {
       console.log(this.name);
    }
}


let j1 = new J('hello',19,'ddf')
let j2 = new J('world',12, 'remv')
console.log(j1);
console.log(j2);