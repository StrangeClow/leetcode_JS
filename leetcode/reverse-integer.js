// 反转整数

/** 
 * 1. 注意数字的存储范围 一般情况下只能存储32位有符号整数
*/

const a = function() {
    console.log('ghhhhhhhhhhh');
}

var reverseInteger = function(x) {
    
   
   var newReverseInteger = x.toString().split('').reverse().join('')
     newReverseInteger = parseInt(newReverseInteger)
     if(x>Math.pow(2,31)-1 || x< -Math.pow(2,31)) {   // 处理数据边界问题 
         return
     }
     else {
         return x < 0 ? -newReverseInteger : newReverseInteger;   // 直接取反
     }
}



let a1 = 9876
let a2 = 120
 console.log('反转整数===',reverseInteger(a1));
 console.log('反转整数===',reverseInteger(a2));

 

 /**
  *
  *
  * @param {*} num
  * @returns
  */
 const reverseInteger2 = function(num) {
     
    // 边界情况  数据超出长度范围 
   if((num >= Math.pow(2, 21) - 1) || (num <= -Math.pow(2, 31))) {
      return 0
   }
   if(num === 0)  return 0
  
   let res = 0
   while (num !== 0) {
       // 从个位起一位一位的颠倒
       res = res * 10 + num % 10;
       num = parseInt(num / 10);  // n除以10， 一位数转化完成 到最后小于1 被转成0 退出循环
   }
   return res

 }
let aa= 987654
let aaa = -654321

 console.log('第二种',reverseInteger2(aa));
 console.log('第二种',reverseInteger2(aaa));



 // 


  let a4 = 987654
  let a5 = 120
  let a6 = -123456
//   console.log(reverse(a4));
//   console.log(reverse(a5));
//   console.log(reverse(a6));