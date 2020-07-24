/**
 *     给定一个字符串，将其中的大写字母转变成小写并返回
 * 
 * 
 *    input ==>  123Abc  
 *    output ==>  123abc
 *
 * @param {*} str
 * @returns
 */
const transBigWordToSmallWord = function(str) {

    // 若字符串为空
    if(str.length === 0) return ''
    // 最粗暴的写法 全部转小写 
   return str.toLowerCase()

}




let s = 'GoodlUcktoMe88'


console.log(transBigWordToSmallWord(s)); 




//    利用字符码的值 

const transBigWordToSmallWord2 = function(str) {
   
    // 边界情况优先处理
   if(str.length === 0) return ''
    // 字符串转为数组 再循环
    let tempArr = str.split('')
    
    for (const key in tempArr) {
      
      let charCode = tempArr[key].charCodeAt(0)

      console.log('字符码值为:',charCode)
      
      //  [A-Z]的ASCII码范围为 [65-90]
      if(charCode >= 65 && charCode <= 90) {
         
         // fromCharCode()  将 Unicode 编码转为一个字符:
         tempArr[key] = String.fromCharCode(charCode + 32)

      }
    }
    
    // 数组再转为字符串
    return tempArr.join('')

}


let ss = '88GooD00lUckToME520'

console.log(transBigWordToSmallWord2(ss));









/**
 *
 *
 * @param {*} str
 */
const transBigWordToSmallWord3 = function(str) {

    // 定义一个对应的字典序列
     let letterDictionary = {
         A: "a",
           B: "b",
           C: "c",
           D: "d",
           E: "e",
            F: "f",
           G: "g",
            H: "h",
            I: "i",
            J: "j",
            K: "k",
            L: "l",
            M: "m",
            N: "n",
            O: "o",
            P: "p",
            Q: "q",
            R: "r",
            S: "s",
            T: "t",
            U: "u",
            V: "v",
            W: "w",
            X: "x",
            Y: "y",
            Z: "z"
     }

      let result = ''

      for (let index = 0; index < str.length; index++) {

        

         console.log('字典值==',letterDictionary[str[index]]);

          result +=str[index] in  letterDictionary ? letterDictionary[str[index]] : str[index]
      }

      return result
}



let sss = 'LuckIngTOmE'

console.log(transBigWordToSmallWord3(sss));