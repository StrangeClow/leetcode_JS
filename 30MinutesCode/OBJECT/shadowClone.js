/**
 *   浅复制
 *   
 * 直接用es6对象API   Object.assign({}, obj)
 *
 * @param {*} obj
 */
const shadowClone = obj => Object.assign({}, obj)


let a = {
    name: 'code',
    sex: 1,
    type: undefined,
    age: 18,
    height: NaN,
    getUserName(name) {
        this.name = name
    },
    b: {
        weight: 160,
        food:'tomato',
        getInfo(food,weight) {
            return `my name is ${food}`
        }
    }
}


console.log(shadowClone(a));





const shadowClone2 = function(obj) {
    return {...obj}
}

let a4 = {
    ye: 'gfg',
    ag: 234,
    test: function() {
        return this.age
    }
}
console.log(shadowClone2(a4));