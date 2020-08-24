/**
 *  转为小写
 *    实现一个函数，将字符串s转化为小写 
 *        str.loLowerCase()
 *
 * @param {*} str
 * @returns
 */
const toLowerCase = function(str) {       // str.API
    return str.toLowerCase();
}


/**
 *
 *  字符串.toLowerCase()
 */
const toLowerCaseTwo = (str)=> str.toLowerCase()



/**
 *   利用ASCII值   
 *
 * @param {*} str
 * @returns
 */
const toLowerCase3 = function(str) {
  let res = ''
  for (let index = 0; index < str.length; index++) {
      
    let tempCode = str.charCodeAt(index)   // 拿到对应字母的ASCII值
    console.log(tempCode);
    
    if(tempCode <= 90 && tempCode >= 65) {      //大小写起始对应的ASCII值 
        // ASCII的规律 起止位置
       res +=  String.fromCharCode(tempCode + 32)
    }
    else {
        res += str[index]
    }
  }
  return res
}

let s = 'HeLlo'
console.log(toLowerCase3(s));