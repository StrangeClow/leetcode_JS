/**
 *  将字符串的首字母大写
 *   剩余参数 解析出来字符串的第一个值 然后toUpperCase()   最后再把数组转化为字符串  join 
 *
 * @param {*} [first, ...rest]
 * @param {boolean} [loeweRest=false]
 */
const capitalize = ([first, ...rest],loeweRest = false) => {
   return first.toUpperCase() + (loeweRest ? rest.join('').toLowerCase() : rest.join(''))
}



console.log(capitalize('zhaoying'));