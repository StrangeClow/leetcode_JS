/**
 *  将字符串的首字母大写 
 * 
 * @param {*} [first,...rest]
 * @param {boolean} [lowerRest=false]
 */
const capitalize = ([first,...rest], lowerRest = false) => 
 
     first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))