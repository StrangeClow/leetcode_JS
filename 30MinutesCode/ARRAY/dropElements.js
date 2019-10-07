/**
 *    删除数组中的元素 直到传递的函数返回true  
 *      返回数组中的其他元素
 *     
 *
 * @param {*} arr  数组元素
 * @param {*} func   传递的函数
 * @returns
 */
const dropElements = (arr, func) => {
    while(arr.length > 0 && !func(arr[0])) {
        // 循环访问数组，使用array.slice()删除数组的第一个元素
         arr.slice(1)
    }
    // 循环结束 返回删除后的元素信息
    return arr
}