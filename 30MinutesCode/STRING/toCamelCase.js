/**
 *    将字符串转换为驼峰命名的格式  
 * 
 *    1. 首先判断边界情况 是否是字符串
 *    2. 正正则匹配首字母 toUpperCase() 以及toLowerCase()
 *    3.  转化为数组
 *
 * @param {*} str
 * @returns
 */
const toCamelCase = str => {
    let s = str && 
        str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x=> x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase())
        .join('')
        console.log('s===>',s);
        console.log(s.slice(0,1),'<===>',s.slice(1));
        return s.slice(0,1).toLowerCase() + s.slice(1)
}


let s1 = 'hope the world peace'
console.log(toCamelCase(s1));