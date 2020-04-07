/**
 *    返回两个数组中都存在的元素
 *
 * @param {*} a  a数组
 * @param {*} b  b数组
 * @returns
 */
const intersection = (a,b) => {
    const s= new Set(b)   // new Set去重
    // fliter过滤 
   // has方法判断是否存在
    return a.filter(x => s.has(x))
}



console.log(intersection([12,3,4,5,6,7],[3,4,5,8,90]));




/**
 *
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
const intersection2 = function(a, b) {
    return ab
}