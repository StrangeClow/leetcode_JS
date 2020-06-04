/**
 * 将参数数组映射到该函数的输入 
 *
 * @param {*} fn
 * @returns
 */
const spreadOver = function(fn) {
    
    console.log(...argsArr);
    return argsArr => {
        return fn(...argsArr)
    }
}

const arrMax = spreadOver(Math.max)
console.log(arrMax[2,5,9]);