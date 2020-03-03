/**
 *  return the native type of value
 *  
 * 三元表达式先判断null 和 undefind 然后再利用constructor去判断
 *
 * @param {*} v
 */
const getType = v => v === null ? 'null' :v === undefined ? 'undefined' : v.constructor.name.toLowerCase();

((v)=> {
    console.log('v',v)
   if(v === null) return null
   if(v=== undefined) return undefined
   else {
       return v.constructor.name.toLowerCase()
   }
})({})


console.log('11====>',getType('aaa'))
console.log(getType([]))
console.log(getType(function(){}))
console.log(getType(true))
console.log(getType('true'))
console.log(getType(8.098))
console.log(getType(/ghg/))
console.log(getType({}))
console.log(getType(new Object()))


const types = function(info) {
  return Object.prototype.toString.call(info)
}
console.log('------------');
console.log(types('helloe'));
console.log(types(null));
console.log(types(8888));