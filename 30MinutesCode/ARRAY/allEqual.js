
/**
 * 检查所有的数组元素是否相等
 * 
 * Array.prototype.every()
 * 
 * every本身的特性 
 * 
 *
 * @param {*} arr
 */

const allEqual = arr=> {
    arr.every(val => val === arr[0])
}