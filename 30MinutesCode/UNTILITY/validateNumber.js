/**
 *  判断是否为数字
 *
 * @param {*} n
 */
const validateNumber = n=> {
    !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
}