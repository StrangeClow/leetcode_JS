/**
 *  返回数组中指定的索引 若果没有 则为空  
 *  
 * @param {*} arr
 * @param {*} val
 * @returns
 */
const indexofAll = (arr, val) => {
    const includes = []
    //  循环判断是否有值相等  
    arr.forEach((el, i) => el === val && includes.push(i))
    return includes
}