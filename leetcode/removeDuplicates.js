 //  删除排序数组中的重复项

 /** 
  *  给定义一个排序数组 需要在原地删除重复出现的元素 使得每个元素只出现一次 返回移除后的数组长度 
  * 
  *  不适用额外的数组空间 必须原地修改输入数组
  * 
  * eg  input 【1,2,3,4,5,2,4】
  *   ouput 返回length为5 【1,2,3,4,5】
  * 
  * 思路 ：重复元素一定是数组中相邻的元素 我们可以通过遍历数组 找出相邻的相同项
 */

 var removeDuplicates = function(num) {
   // 基础for循环
    for(let i = 0; i< num.length; i++) {
      if(num[i] == num[i+1]) {
          num.splice(i,1)    // 注意splice的用法 不同的传参的意义
          i--;  // 移除之后 i-1  防止跳过
      }
    }
    return num  
 },

 