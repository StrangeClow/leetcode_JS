/**
 *   简易数组去重
 * 
 *    new Set()  set集合存储不重复元素的特性 
 * 
 *   ...  解构
 *
 * @param {*} arr
 */
const distinctValuesOfArray = arr => [... new Set(arr)]



console.log(distinctValuesOfArray([1,2,3,4,5,6,4,3]));


/**
 *   简单数组值去重  
 * 
 *      循环比较判断 
 *
 * @param {*} arr
 * @returns
 */
const distinctValuesOfArray2 = function(arr) {
    // 新增了内存空间 
    let temp = [], aa = []
    for (let index = 0; index < arr.length; index++) {
        if(!temp.includes(arr[index])) {
            // 装入另外一个空间
            aa.push(arr[index])
        }
        temp.push(arr[index])
    }
    return aa
}


console.log(distinctValuesOfArray2([1,2,3,4,5,4,2]));