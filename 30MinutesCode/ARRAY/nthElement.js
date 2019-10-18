/**
 *   获取数组的第N个元素  可设置默认值 或者指定需要获取数组的第几个元素
 * 
 *    注意  slice的用法    从一座的数组中返回选定的数组 
 *
 * @param {*} arr
 * @param {number} [n=0]
 * @returns
 */
const  nthElement = (arr, n = 0) => {
    return (n > 0 ? arr.slice(n, n+1) : arr.slice(n))[0]
}