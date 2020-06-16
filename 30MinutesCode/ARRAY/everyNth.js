/**
 * 返回数组中的每个第n个元素  
 *
 * @param {*} n
 * @returns
 */
const everyNth = function(arr, nth) {
   
    return arr.filter((item, index) => {

        console.log('item, index====',item, index)

        return index % nth === nth - 1
    })
}


console.log(everyNth([12,34,23,42],3));


