/**
 *    给定一个按生序排序的数组，请找出两个数，使得它们的和等于traget 
 *    函数需要返回两个数的小标，且下标不能相同，较小的下标在前，大的在后 
 * 
 *   input ==> nums==【2,7,11,15】  traget==[9]
 *   output ==> [1,2]
 * 
 */
 const twoSum = function(nums1, target) {
   let tempMap = new Map()
   for(let i = 0; i < nums1.length; i++) {
     let tempNum = target - nums1[i]
     if(tempMap.has(tempNum)) {
       return [tempMap.get(tempNum), i]
     }
     tempMap.set(nums1[i], i)
   }
 }

 let a2 = [1,7,6,3,5,2,8], t2 = 11
 console.log('实践1',twoSum(a2,t2))



// 双层循环遍历数据 让目标值等于 i+j   返回即可
 var secondTwoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      for(let j = i+1;j<nums.length;j++) {
           if(target == nums[i] + nums[j]) {
               return [i,j]
           }
      }
    }
 }
 

 
 /**
  * 构造arr{key: value} 对象 将target-num[i] 差值放在arr{}对象中
  * 并存储其位置i 然后每次在arr{}对象中找
  * @param {*} nums
  * @param {*} target
  * @returns
  */
 const thirdTwoSum = function(nums, target) {
     let arr = {}
     for(let i = 0; i<nums.length; i++) {
       if((arr[nums[i]]) >= 0 ) {
          return [arr[nums[i]],i]
       }
    
       arr[target -nums[i]] = i
     }
 }


 
 let a1 = [3,9,8,18,26], t1 = 26
 console.log('方法3==>',thirdTwoSum(a1,t1))