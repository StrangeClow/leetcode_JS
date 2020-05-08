/**
 * 将参数数组映射到该函数的输入 
 *
 * @param {*} fn
 * @returns
 */
const spreadOver = function(fn) {
    return argsArr => {
        return fn(...argsArr)
    }
}