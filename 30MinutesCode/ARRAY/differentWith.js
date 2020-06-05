/**
 *  通过比较函数比较两个函数的差异  
 *
 * @param {*} arr
 * @param {*} val
 * @param {*} comp
 * @returns
 */
const differentWith = function(arr, val, comp) {
    
    return arr.filter((item, index)=> {
        // arr.findIndex() 返回符合条件的第一个数组的位置 
        return val.findIndex((minItem, minIndex)=> {

            return comp(item, minItem)
        }) === - 1
    })
}