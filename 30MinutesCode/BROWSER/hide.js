/**
 *    隐藏所有指定的元素   
 *
 * @param {*} el
 * @returns
 */
const hide = function(...el) {

    return [...el].forEach(element => {
        
        // 隐藏指定元素 根据标签
        return element.style.display = 'none'

    });
}