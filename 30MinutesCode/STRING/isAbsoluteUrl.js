/**
 *    主要是正则匹配绝对路径的相关信息  
 * 
 *      test校验  return  true/false 
 *
 * @param {*} str
 */
const isAblouteUrl  = str => /^[a-z][a-z0-9+.-]*:/.test(str)