/**
 *  return the native type of value
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