/**
 *  对象转键值对
 * 
 * eg: objectToPairs({a:1,b:2}); output [['a',1],['b',2]]
 *
 * @param {*} obj
 */
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]])          // Object.keys(onj)   Object.values(obj)



let c = {
    a:1,
    b:2
}


console.log(objectToPairs(c));



const o = function(obj) {
    return Object.keys(obj)
}

const o1 = function(obj) {
    return Object.values(obj)
}

const o2 = function(obj) {
    return Object.entries(obj)
}


let c1 =  {
    name: 'hello',
    age: 18,
    address: 'vs codee'
}

console.log(o(c1))
console.log(o1(c1))
console.log(o2(c1))