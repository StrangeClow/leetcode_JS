 // 回文数是指郑旭和倒叙都是一样的数  并且我们假设所输入的数字为整数

 var isPalindrome = function(x) {
     if(!x) {
          return
     }
     // 反转 字符串转化为数组 数组反转后再转化为字符串
     return  x.toString().split('').reverse().join('') === x.toString()
 }


 var secondIsPalindrome = function(x) {
       let y = x,   // 保存当前变量的副本
       tempReversed = 0;
       while(x > 0) {  // 党X大于0时循环执行   反转的特性 除以10  取最后一位的值 
        tempReversed = x % 10 + tempReversed * 10;
        x =Math.floor(x / 10)
       }
       return y == tempReversed
 }