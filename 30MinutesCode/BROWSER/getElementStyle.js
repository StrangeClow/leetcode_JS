/**
 *   返回当前所选标签的样式
 *  
 *     js方法 getComputedStyle
 *
 * @param {*} el
 * @param {*} ruleName
 */
const getElementStyle = (el, ruleName) => {
    getComputedStyle(el)[ruleName]
}