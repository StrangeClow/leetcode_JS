/**
 *   深拷贝  
 *
 * @param {*} obj
 */
const deepCopy = function(obj) {
    //JSON方法
   return JSON.parse(JSON.stringify(obj))
}