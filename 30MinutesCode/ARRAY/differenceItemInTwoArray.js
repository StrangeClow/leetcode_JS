/**
 *  求取两个数组中的不同值 并return  
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
const difference = (a,b) => {
    // new Set() 去重 对数组b中元素去重
    const s = new Set(b);   
    // 过滤非值 存在a中但不存在b中
    return a.filter( x => !s.has(x))
}


// input ([1,2,3,4],[1,2,3])   output==>[4]