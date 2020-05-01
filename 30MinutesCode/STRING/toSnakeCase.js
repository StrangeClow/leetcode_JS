/**
 *  将字符串转化为下划线拼接格式  
 *     
 *   大概提供一个思路  
 * 
 *      1. 判断字符
 *        2. 正则匹配   (找到合适的正则匹配项 )难点  
 *        3. 循环
 *        4. 转化为字符   join('') 
 *  
 *
 * @param {*} str   字符串
 */
const toSnakeCase = str => {
  return  str && 
    str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)       // str.match(/正则匹配/)
    .map(x => x.toLowerCase())
    // 间隔符连接 Array.join(' ')
    .join('_')
}


console.log(toSnakeCase('camelCase'));