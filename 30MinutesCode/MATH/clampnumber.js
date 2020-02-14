/**
 *  返回限制范围内的值
 * 
 *    如果输入的值在限定的[a,b]范围内，就取值num，否则返回范围内最接近的数字
 * 
 * 
 *     主要应用到了数学函数 Math.max   Math.min 
 *
 * @param {*} num
 * @param {*} a
 * @param {*} b
 */
const clampNumber = (num, a, b) => {
    Math.max(Math.min(num,Math.max(a,b)),Math.min(a,b))
}