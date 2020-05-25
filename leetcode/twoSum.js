/**
 *    给定一个按升序排序的数组，请找出两个数，使得它们的和等于traget 
 *    函数需要返回两个数的下标，且下标不能相同，较小的下标在前，大的在后 
 * 
 *   input ==> nums==【2,7,11,15】  traget==[9]
 *   output ==> [1,2]
 * 
 */
 const twoSum = function(nums1, target) {
   let tempMap = new Map()
   for(let i = 0; i < nums1.length; i++) {
     let tempNum = target - nums1[i]
     // map.has()
     if(tempMap.has(tempNum)) {
       return [tempMap.get(tempNum), i]
     }
     // map.set()
     tempMap.set(nums1[i], i)
   }
 }

 let a2 = [1,7,6,3,5,2,8], t2 = 11
 console.log('实践1',twoSum(a2,t2))



// 双层循环遍历数据 让目标值等于 i+j   返回即可
 var secondTwoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
      for(let j = i+1;j<nums.length;j++) {
           // target = nums[i] + nums[j]
           if(target == nums[i] + nums[j]) {
               // 直接抛出数组的下标 
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






 // 采用hash表来解决问题 
 const twoSum5= function(nums, target) {
   let map = new Map()
    for(let index = 0; index < nums.length; index ++) {

      let k = target - nums[index]
      console.log('k====>',k);
      if(map.has(k)) {
        console.log('map.get(k), index===>',map.get(k), index);
         return [map.get(k), index]
      }
      map.set(nums[index], index)
      // console.log('map.set====>',map);
    }
    console.log('map集合====>',map);
    return []
 }
 

 
 let a5 = [,8,18,26,69,0,46,7], t5 = 15
 let a6 = [,8,18,26,69,0,46,7], t6 = 17
 console.log('方法5==>',twoSum5(a5,t5))
 console.log('方法5不存在的情况==>',twoSum5(a6,t6))