/**
 *  检查是否为类数组    具有iteraror接口 
 *
 * @param {*} obj
 */
const isArrayLike = obj =>  {
    return  obj != null && typeof 
            obj[Symbol.iterator] === 'function'
}

let a1 = [1,2,3,4,5]
let a2  = null
let a3 = 'hello'
let a4 = [{a:'good'},{b:'luck'},{c:'to'},{d:'me'}]
console.log('类数组===>',isArrayLike(a1));
console.log('类数组===>',isArrayLike(a2));
console.log('类数组===>',isArrayLike(a3));
console.log('类数组===>',isArrayLike(a4));