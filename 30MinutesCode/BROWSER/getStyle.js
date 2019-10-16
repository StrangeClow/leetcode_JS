/**
 *   获取指定元素的css规则的值 
 * 
 *    getComplutedStyle
 *
 * @param {*} el
 * @param {*} ruleName
 * @returns
 */
const getStyle = (el, ruleName) =>{
    return getComputedStyle(el)[ruleName]
} 