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

    // 把类数组转化为数组 agruments数据
    // Array.from()

    // es6的新数据结构  Set 
    return Array.from(new Set(arr))
}