/**
 *  返回数组中指定的索引 若果没有 则为空  
 *  
 * @param {*} arr
 * @param {*} val
 * @returns
 */
const indexofAll = (arr, val) => {
    const ifIncludes = []
    //  循环判断是否有值相等  
    arr.forEach((el, i) => el === val && ifIncludes.push(i))    // 存储匹配元素的索引 
    return ifIncludes
}



let n1 = [1,2,3,4,5,6]
console.log(indexofAll(n1,5));