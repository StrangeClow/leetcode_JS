/**
 *  浅复制对象   浅拷贝只拷贝一层属性  
 *
 * @param {*} obj
 * @returns
 */
const copyObj = function(obj) {
    
    // (...Object)
    // Object.assign()
    return {...obj}
}






const copyObj2 = function(obj) {
   for( let key of obj) {
       b[key] = a [key]
   }
}




const copyObj3 = function(obj) {
    // obj  对象的API
    // Object.assign(a,b)    a===>目标对象     b====> 源对象
    return Object.assign({}, obj)
}


let a = {
    name: 'vs',
    age: 19,
    date: new Date(),
    addr:undefined,
    getUserName: function() {
        return `my nmae is ${name}`
    }
}


console.log(copyObj3(a));