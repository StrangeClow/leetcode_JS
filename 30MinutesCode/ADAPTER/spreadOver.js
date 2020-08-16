/**
 * 将参数数组映射到该函数的输入 
 *
 * @param {*} fn
 * @returns
 */
const spreadOver = function(fn) {    // 
    
    return function(args) {
        return fn(...args)
    }
}

const arrayMax = spreadOver(Math.max)
console.log(arrayMax([1, 2, 3]))


