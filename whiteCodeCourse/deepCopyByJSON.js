/**
 *   深拷贝  
 *
 * @param {*} obj
 */
const deepCopy = function(obj) {
    //JSON方法 部分属性不能继承 
   return JSON.parse(JSON.stringify(obj))
}