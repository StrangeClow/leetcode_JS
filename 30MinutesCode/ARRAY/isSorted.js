/**
 *   检测给定数组arr是否为按数值类型的排序数组  升序return 1  降序 return -1  无序return 0 
 *
 * @param {*} arr
 * @returns
 */
const isSorted = function(arr) {     // 待解决 
    
    const direction = arr[0] > arr[1] ? -1 : 1

    for(let [i, val] of arr.entries()) {
        if(i === arr.length - 1 ) {
          return direction
        }
        // else if() {

        // }
    }
}