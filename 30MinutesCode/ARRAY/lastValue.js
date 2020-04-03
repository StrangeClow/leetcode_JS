/**
 *   获取数组的最后一个元素  
 *
 * @param {*} arr
 * @returns
 */
const lastValue = function(arr) {
   return arr[arr.length - 1]
}


console.log(lastValue([1,2,3,4,5,6,7,8]))


// 直接拿数组方法 
const lastValue2 = function(arr) {
    return arr.pop()
}

console.log(lastValue2([1,2,3,4,5,6]))



