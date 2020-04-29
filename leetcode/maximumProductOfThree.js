/**
 *  三个数的最大乘积
 * 
 *     给定一个整形数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 *
 * @param {*} nums
 * @returns
 */
const maximumProductOfThree = function(nums) {
    
    // 先对数组排序
    nums.sort((a, b)=> {
        return a -b
    })

    let res1 = nums[nums.length - 1] * nums[0] * nums[1]
    let res2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]

    return Math.max(res1, res2)

}


let n1 = [1,2,3]
let n2 = [2,3,4,5,6]
console.log(maximumProductOfThree(n1));
console.log(maximumProductOfThree(n2));