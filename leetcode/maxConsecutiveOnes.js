/** 
 *  到最近的人的距离  
 *  
 * 题目描述: 在一排座位（ seats）中，1 代表有人坐在座位上，
 * 0 代表座位上是空的。至少有一个空座位，且至少有一人坐在座位上。
 * Alex希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。
 * 返回他到离他最近的人的最大距离。
 * 
 * eg； [1,0,0,0]   output==>  3  
 * 
 * 分析：找到最大连续空座位数即找0
 */

 var maxDistanceToOneClosest = function(arr) {
     let count = 0, tempArr
   for (let index = 0; index < arr.length; index++) {  // 循环获取所有连续的0
    if(arr[i] == 0) {
        count++   //若存在 即++
    } else {
     tempArr.push(count)
     count = 0
    }    
   }
   //获取数组末尾一段连续的0数
   tempArr.push(count);
  let max = Math.max(...tempArr) //得到最大连续0数
  //处理首尾没人坐的情况
  if(arr[0] == 0 || arr[len - 1] == 0)  {
      return Math.max(tempArr[0], Math.ceil(max / 2), tempArr[tempArr.length - 1]); // 取最大值 math.max
      return Math.ceil(max / 2);
  }
 }