/**
 *       面向对象的语言通常的两种继承
 *  
 *             1. 接口继承，只继承方法的签名（js）
 *             2. 实现继承，继承实际的方法  
 * 
 *   
 *    es6中继承
 *
 * @param {*} str
 * @returns
 */





 class animal{
    
   constructor(name,age,food) {
    this.name = name
    this.age = age
    this.food = food
   }

   eat() {
     let s = `我叫${this.name},我今年${this.age},喜欢吃${this.food}`
     return s 
   }

   run() {
       return `run to weight`
   }

   static getName(name) {
       return `my name is ${name}`
   }

 }

 class cat extends animal{
   drink(food) {
      return `i am ${this.name},i like drink ${food}`
   }
   run(speed) {
    return `i run ${speed} km`
   }
 }


 let cat1 = new cat('miao',12,'苹果')
 let cat2 = new cat('jicheng',18,'例子')
 console.log(new cat('44',15,'66'));
 console.log(cat1);
 // 静态方法 
 console.log(cat.getName('zyx'));
 console.log(cat1.run(200));
console.log(cat1.eat());
console.log(cat2.eat());
console.log(cat1.drink('water'));







class Person{
  // constructor实例
  constructor(name, age, sex, hobby) {
      this.name = name
      this.age = age
      this.sex = sex
      this.hobby = hobby
  }

  getName(name) {
    return `my name is ${name}`
  }

  getHobby(hobby) {
    return ['swim', 'play basketball'].concat(hobby)
  }

  getAge(age) {
    return age * 3
  }
}


class Teacher extends Person{
  constructor() {
    super(name,age)   // 调用父类构造函数，this指向子类 
   
  }

  getSex(sex) {
    return `i am a ${sex == 1 ? 'boy' : 'girl'}`
  }

  getAge(age) {
    return age * 2
  }
}


// 创建实例
let xieT = new Teacher()
let liT = new Teacher()
console.log(xieT);
console.log(xieT.getAge(10));
console.log(xieT.getHobby('football'));
console.log(xieT.getSex(0));
console.log(liT.getName('xiaomi'));
console.log(liT.getSex(1));





const UserInfo = class User {
  constructor(name, age) {
     this.name = name
     this.age = age
  }
}
let txq = new UserInfo('hello',18)

console.log(txq)



// 子类的_proto_指向父类本身
// 子类的prototype属性的_proto_指向父类的prototype属性
// 实例的_proto_属性的_proto_指向父类实例的_proto_