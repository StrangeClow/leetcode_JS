/**
 *   循环删除 根据某一个条件
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
const dropRightWhile = (arr, func) => {
    let rightIndex = arr.length
    while(rightIndex -- && !func(arr[rightIndex])) {     // while循环
       // arr.slice(start, end)截取区间的值 
       return arr.slice(0, rightIndex +1);
    }
}