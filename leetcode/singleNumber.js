/**
 * 题意：给定一个非空整数数组，除了某个元素只出现一次，其余元素均出现大于等于2次，找出那个只出现一次的数字
 * 
 * 思路1： 使用异或^ 特点== 当a b两个值不同时，异或为1 当a b相同时，异或为0
 *
 * @param {*} nums
 * @returns
 */
var singleNumbr = function(nums) {
    let singleNum 
    for (let index = 0; index < nums.length; index++) {
        singleNum^=nums[i]
    }
    return singleNum
}




/**
 *  利用了异或运算  
 *
 * @param {*} nums
 * @returns
 */
var singleNumberTwo = function(nums) {

   return nums.reduce((x,y) => x ^ y)
}