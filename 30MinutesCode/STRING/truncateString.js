/**
 *     根据指定的长度截取字符串
 *       1. 嵌套三元表达式 
 *       2. Array.splice(index,numbers,addItems(可选))
 *       3. Array.slice(start, end)
 *
 * @param {*} str
 * @param {*} num
 */
const truncateString = (str, num) =>  {
   console.log(str,num);
   // 若字符串长度大于截取长度 走splice()截取    反之直接return当前字符串 
   console.log(str, num);
   console.log(typeof str)
   return str.length > num ?
    str.slice(0, num > 3 ? num -3 : num) + '...' : str
}



 
 //   eg:      
 console.log(truncateString('wuhanfighting', 4));  
 //  output:     wuhan




 const truncateString2 = function(str, num) {

   if(str.length <= num) {
     return str
   }
   
   if(str.length > num) {
     // arr.slice()
     str.slice()
   }

 }