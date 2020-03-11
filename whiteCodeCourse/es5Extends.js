function Person(name, age) {
    this.name = name
    this.age = age

    this.getName = function(name) {
        return `my name is ${name}`
    }
} 

let t = new Person()
console.log(t.getName('xoaomi'));