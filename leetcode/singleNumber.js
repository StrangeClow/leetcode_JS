/**
 *  只出现一次的数字
 * 
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
        // ^异或运算
        singleNum^=nums[index]
    }
    return singleNum
}



let a1 = [1,1,2]
console.log(singleNumbr(a1));
console.log(singleNumbr([1,1,2,2,3,4]));


/**
 *  利用了异或运算  
 *
 * @param {*} nums
 * @returns
 */
var singleNumberTwo = function(nums) {

   return nums.reduce((x,y) => x ^ y)
}

let a2 = [1,1,2]
console.log(singleNumberTwo(a2));
console.log(singleNumberTwo([1,1,2,2,3,4]));