/**
 *    简易数组去重 
 *
 * @param {*} arr
 * @returns
 */
const uniqueArrFun = function(arr) {

    // new Set()
    // ...展开
   return new Set(...arr)
}





const uniqueArrFun2 = function(arr) {
    return Array.from(new Set(arr))
}