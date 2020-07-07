/**
 *     实现一个函数把字符串s中的空格替换为"%20"
 *
 * @param {*} str
 * @returns
 */
const replaceSpace = function(str) {
    //正则替换
    return str.replace(/ /g, '%20')
}



const replaceSpace2 = function(str) {
   let ss = ''
   //  循环给定字符串
   for (const item of str) {
      
       // 若某一项为空格  则替换 
        if(item === ' ') {
           ss+= '%20'
        } else {
            ss+=item
        }
    }
    return ss
}

let a1 = 'hello world'
let a2 = 'he llo wor ld'
console.log(replaceSpace2(a1));
console.log(replaceSpace2(a2));