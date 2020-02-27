/**
 *   压平数组
 *
 * @param {*} arr
 * @returns
 */
const deepInOneth = function(arr) {
    if(arr.length === 0) {
         return []
    }
    const head = arr[0]
    if(head instanceof Array) {
       arr[0] = deepInOneth[head]
    } else {
        arr[0] = [arr[0]]
    }
    return arr[0].concat(deepInOneth(arr.slice(1)))
}