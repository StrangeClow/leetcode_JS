
/**
 * 检查所有的数组元素是否相等
 * 
 * Array.prototype.every()
 * 
 *
 * @param {*} arr
 */

const allEqual = arr=> {
    arr.every(val => val === arr[0])
}