/**
 * 判断是否为空  记住边界问题
 *
 * @param {*} val
 */
const isEmpty = val => {
    val == null || !(Object.keys(val) || val).length
}


// eg 

console.log(isEmpty(true));