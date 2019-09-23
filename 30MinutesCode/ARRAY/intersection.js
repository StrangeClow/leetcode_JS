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
    return a.fliter(x => s.has(x))
}