/**
 *  用指定的掩码字符替换字符串 
 * 
 *      主要用到正则匹配   slice获取需要被特殊字符替换的部分    slice()从已有的数组中返回选定的元素 
 * 
 *        可用模板字符串替换修改
 *
 * @param {*} cc
 * @param {number} [num=4]
 * @param {string} [mask="*"]
 * @returns
 */
const maskFunc = (cc, num = 4, mask = "*") => {
    // (... + cc) 转化为字符串 
    return ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num)
}



let n1 = '1234567890'
console.log(maskFunc(n1));         // output ====> ******7890