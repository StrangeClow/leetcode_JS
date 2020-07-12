/**
 *   连续子数组的最大和     最大子序和 
 * 
 *   
 * 给定一个整形数组，数组里有正数也有负数，数组中的一个或连续多个整数组成一个子数组，求所有子数组的和的最大值 
 *
 * @param {*} nums
 * @returns
 */
const  maxSubArray = function(nums) {   // 对单一结果分类 
    
    // 定义状态数组dp[i]的含义：  数组中元素下标为[0,i]的连续子数组最大和
    let maxNum = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        // 若nums[i] > 0 则dp[i] = nums[i] + dp[i - 1]
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
        maxNum = Math.max(maxNum, nums[i])
    }
    return maxNum
}


let n = [-2,1,-3,4,-1,2,1,-5,4]
console.log('dp1==>',maxSubArray(n));



const maxSubArray2 = function(nums) { 
   var dp = []
   // 假设nums长度为1 则连续最大子序和为nums[0]
   dp[0] = nums[0]
   var maxNum = dp[0]
   // 同理 若nums长度为2 则 max  = Math.max(nums[0],nums[0]+ nums[1])
   for(let i = 1; i < nums.length; i++) {
       // dp规划 
       dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
       maxNum = Math.max(dp[i], maxNum)
   }
   return maxNum
} 


let n1 = [-2,1,-3,4,-1,2,1,-5,4]
console.log('dp2===>',maxSubArray2(n1));