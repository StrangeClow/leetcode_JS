/**
 *   返回当前所选标签的样式
 *  
 *     js方法 getComputedStyle获取css属性值  
 * 
 *   
 *
 * @param {*} el
 * @param {*} ruleName
 */
const getElementStyle = (el, ruleName) => {
    getComputedStyle(el)[ruleName]
}


const p = '<div class="con"> <p>getElement info</p> </div>'

