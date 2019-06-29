/**
 *  给定义一个整数数组和目标值 找出对应数组中和未目标值的两个数
 * 
 */

 var twosUM = function(nums,target) {
    let hash,result;
    nums.forEach( (v, i)=> {
        if (typeof hash[v] !== "undefined") {
            result[0] = i;
            result[1] = hash[v];
        }
        hash[target - v] = i;
    });
    return result;
 }


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



 // 构造arr{key: value} 对象 将target-num[i] 差值放在arr{}对象中 并存储其位置i 然后每次在arr{}对象中赵
 let thirdTwoSum = function(nums, target) {
     let arr = {}
     for(let i = 0; i<nums.length; i++) {
       if(typeof(arr[nums[i]]) !== undefined ) {
          return [arr[nums[i]],i]
       }
       arr[target -nums[i]] = i
     }
 }