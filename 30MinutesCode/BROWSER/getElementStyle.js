/**
 *   返回当前所选标签的样式
 *
 * @param {*} el
 * @param {*} ruleName
 */
const getElementStyle = (el, ruleName) => {
    getComputedStyle(el)[ruleName]
}