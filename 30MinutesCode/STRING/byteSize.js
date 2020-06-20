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



const byteSize2 = function(str) {
    // 区分不同的情况 
    
    let len = 0
    for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
             let = len + 2
        } else {
            len ++
        }
    }
    return len
    // 英文
}

let s2 = 'vscodeq'
console.log(byteSize2(s2));