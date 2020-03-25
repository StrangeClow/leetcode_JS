/**
 *   是否为纯对象形式  不包括数组 等 
 * 
 *    val.constructor === 指定类型     val.constructor.name.toLowerCase() ===某某类型
 *
 * @param {*} val
 */
const isPlainObject = val => {
  return  !! val && typeof val === 'object' && val.constructor === Object
}


let a1 = [1,2,3,4,5]
let a2 = {

}
let a3 = 123
let a4 = 'string'


console.log(isPlainObject(a1));
console.log(isPlainObject(a2));
console.log(isPlainObject(a3));
console.log(isPlainObject(a4));