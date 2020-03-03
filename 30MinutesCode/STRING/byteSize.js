/**
 *  返回字符串的长度
 *    将字符串包装为 blob类型   然后取size
 *
 * @param {*} str
 */
const byteSize = str => {

    // 要在浏览器环境下才可以   Blob是一种javascript数据类型  
    return new Blob([str]).size

} 


let a1 = 'hello world js'
console.log('字符长度===>',byteSize(a1))