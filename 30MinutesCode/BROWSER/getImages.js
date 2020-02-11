/**
 *   取出一个标签里面的所有元素 并把它装进一个数组里 
 * 
 *      1. Elmenet.prototype.getElementByTagName()拿到所有的<img>元素
 * 
 *      2. Array.prototype.map拿到每个标签的值 
 * 
 *      3. new Set() 去重
 *
 * @param {*} el
 * @param {boolean} [includeDuplicates=false]
 */
const getImages = function(el, includeDuplicates = false) {
    
    // 取出指定标签的img元素 结合
    const Images = [...el.getElementByTagName('img')]

    Images.map((img,index)=> {

        img.getAttribute('src');

        return includeDuplicates == true ? Images : [...new Set(Images)]
    })
}