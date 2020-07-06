/**
 *   连续子数组的最大和     最大子序和 
 * 
 *   
 * 给定一个整形数组，数组里有正数也有负数，数组中的一个或连续多个整数组成一个子数组，求所有子数组的和的最大值 
 *
 * @param {*} nums
 * @returns
 */
const  maxSubArray = function(nums) {   //（动态规划）
    
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
console.log(maxSubArray(n));
