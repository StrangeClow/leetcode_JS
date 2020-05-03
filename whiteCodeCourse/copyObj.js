/**
 *  浅复制对象   浅拷贝只拷贝一层属性  
 *
 * @param {*} obj
 * @returns
 */
const copyObj = function(obj) {
    
    // (...Object)
    return {...obj}
}






const copyObj2 = function(obj) {
   for( let key of obj) {
       b[key] = a [key]
   }
}