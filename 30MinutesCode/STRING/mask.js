/**
 *  用指定的掩码字符替换字符串 
 * 
 *      主要用到正则匹配   slice获取需要被特殊字符替换的部分  
 * 
 *        可用模板字符串替换修改
 *
 * @param {*} cc
 * @param {number} [num=4]
 * @param {string} [mask="*"]
 * @returns
 */
const maskFunc = (cc, num = 4, mask = "*") => {
    return ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num)
}