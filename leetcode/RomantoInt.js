/**
 *   罗马数字转整数 
 *
 * @param {*} str
 * @returns
 */

let hashRoman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const romanToInt = function(str) {
    let res = 0
    for (let index = 0; index < str.length; index++) {
     
        // if(hashRoman[str[index]] < hashRoman[str[index+1]]) {
        //   res += hashRoman[str[index+1]] = hashRoman[str[index]]
        // } else {
        //     res += hashRoman[str[index]]
        // }
     
    }
    return res
}


let s1 = 'III'
let s2 = 'IV'
console.log(romanToInt(s1));
console.log(romanToInt(s2));