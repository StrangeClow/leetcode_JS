/**
 *   压平数组
 *
 * @param {*} arr
 * @returns
 */
const deepInOneth = function(arr) {
    // 若数组为空
    if(arr.length === 0) {
         return []
    }
    const head = arr[0]
    // arr第一项是否为数组格式 
    if(head instanceof Array) {
       arr[0] = deepInOneth[head]
    } else {
        arr[0] = [arr[0]]
    }
    return arr[0].concat(deepInOneth(arr.slice(1)))
}