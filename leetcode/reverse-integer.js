// 反转整数

/** 
 * 1. 注意数字的存储范围 一般情况下只能存储32位有符号整数
*/

var reverseInteger = function(x) {
   var newReverseInteger = x.toSting().reverse().join('')
     newReverseInteger = parseInt(newReverseInteger)
     if(res>Math.pow(2,31)-1 || res< -Math.pow(2,31)) {   // 处理数据边界问题 
         return
     }
     else {
         return x < 0 ? -newReverseInteger : newReverseInteger;   // 直接取反
     }
}