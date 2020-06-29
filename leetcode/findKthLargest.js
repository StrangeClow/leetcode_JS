/**
 * 在未排序的数组中找到第k个最大的元素，请注意，你需要找的是数组排序后的第k个最大的元素 而不是第k个不同的元素 
 * 
 * 
 * input ====> arr= [3,2,1,5,6,4]    k = 2
 * output ====> 5 
 *
 * @param {*} nums
 * @param {*} k
 * @returns
 */
const findKthLargest = function(nums, k) {     //  脑回路 
    // 先排倒序 
    nums.sort((a,b)=> {
        return b - a
    })
    console.log(nums);
    // 数组长度  倒序减 - 1 
    return nums[k - 1]
    for (let index = 0; index < nums.length; index++) {    // 第k大的元素 
       
        // nums[index]中存在一个值为第k大的值 
        

    }
}


let n = [3,2,1,5,6,4], k = 2
console.log(findKthLargest(n, k));