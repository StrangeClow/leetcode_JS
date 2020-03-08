/**
 * 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，
 * 即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 
 *   字符      数值
 *    I         1  
 *    V         5  
 *    X         10  
 *    L         50  
 *    C         100  
 *    D         500  
 *    M         1000  
 * 
 *
 * @param {*} nums
 * @returns
 * 
 * 先定义一个对象，将罗马数字与罗马字符串存储在对象之中，
 * 然后倒叙遍历输入字符串，判断相邻两者的大小，
 * 
 * 
 */

// 映射数据集合
let romanObj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

var romanToInt = function(nums) {
     let res = ''
     // 定义数字值
     let intArr=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
     // 定义罗马值
           //  或采用hash映射  interArr对应RomanArr
     let RomanArr=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
     
    
     let index = 0
     // 一天小于等于12小时
     while(index <= 12) {
        while(nums >= intArr[index]) {
            // 对应roman值累加
            console.log('RomanArr[index]==',RomanArr[index]);
           res += RomanArr[index]
           // 输入数字依次递减
           nums -= intArr[index]
        }
        // 
        index ++
     }
    return res
}


console.log(romanToInt(3));
 
  
console.log(romanToInt(9));