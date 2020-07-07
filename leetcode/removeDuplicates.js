 //  删除排序数组中的重复项

 /** 
  *  给定义一个排序数组 需要在原地删除重复出现的元素 使得每个元素只出现一次 返回移除后的数组长度 
  * 
  *  不使用额外的数组空间 必须原地修改输入数组
  * 
  * eg  input 【1,2,3,4,5,2,4】
  *   ouput 返回length为5 【1,2,3,4,5】
  * 
  * 思路 ：重复元素一定是数组中相邻的元素 我们可以通过遍历数组 找出相邻的相同项   先排序 重复元素必定相邻
 */

 //  这个返回了移除后的数据项  
 var removeDuplicates = function(num) {     // 遍历移除 
   // 基础for循环
    for(let i = 0; i< num.length; i++) {
      // 因为数组已排序 若当前值等于下一项值  表明为重复值  删除当前元素  
      if(num[i] == num[i+1]) {
          //  此处Array.splice操作相当于改变了数组  对题意有点违背 
          num.splice(i,1)    // 注意splice的用法 不同的传参的意义   
          // 移除之后 i-1  防止跳过 
          i--
      }
    }
    return num 
 }


 let n1 = [1,3,4,5,8,8,9,10,10,11]
 console.log('移除排序数组的重复项====>',removeDuplicates(n1),removeDuplicates(n1).length)



 /**
  *   
  *    不依赖额外的资源或者依赖少数的额外资源 
  *  
  *       定义一个变量存储数组长度 数组的长度在处理后会发生变化 
  *
  * @param {*} nums
  * @returns
  */
 const removeDuplicates2 = function(nums) {
    
    // 边界检测 
    if(nums.length == 0) return 0
    if(nums.length == 1) return nums
    
    // 慢指针 
    let slow = 0
    for(let fast = 0; fast< nums.length; fast++) {
      console.log('nums[slow]===>',nums[slow],nums[fast])
      // nums[fast]循环数组的值 若不等 指针前移
      if(nums[slow] !== nums[fast]) {
        slow ++
        nums[slow] = nums[fast]
      }
    }
    return slow + 1

 }
 

let n2 = [0,0,1,1,2,3,4,5,5,5,6]
console.log(removeDuplicates2(n2))



const removeDuplicates4 = function(nums) {   //  错误示范 
  if(nums.length == 0) return 0

  let tempMap = new Map()

  for (let index = 0; index < nums.length; index++) {
   if(!tempMap.has(nums[index])) {
      //  tempMap.set(index, nums[index])
      //  tempMap.set(nums[index],tempMap.get(nums[index]+1) )
      
       tempMap.set(nums[index],index )
   }
    
  }
  console.log(tempMap);
}

let n4 = [1,1,2]
console.log(removeDuplicates4(n4));




const removeDuplicates5 = function(nums) {     // 双指针 
 let slow = 0
  for(let fast = 0; fast < nums.length; fast++) {
     if(nums[slow] !== nums[fast]) {
       // slow往前一步
       slow++
       //把fast赋值给slow
       nums[slow] = nums[fast]
     }
  }
  // 加1 为长度 
  return slow + 1
}

console.log(removeDuplicates5([1,1,2]));



const removeDuplicates6 = function(nums) {
  
  if(nums.length == 0)  return 0

  let hash  = {}
  let count = 0
     for (const iterator of nums) {
        if(!hash[iterator]) {
          
            hash[iterator] = iterator

            count ++
        }
     }
    return count
  }

  console.log(removeDuplicates6([1,1,2]));