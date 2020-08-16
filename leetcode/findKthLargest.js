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
   
    // 数组长度  倒序减 - 1 
    return nums[k - 1]      // nums.length - 1
    
    for (let index = 0; index < nums.length; index++) {    // 第k大的元素 
       
        // nums[index]中存在一个值为第k大的值   

    }
}


let n = [3,2,1,5,6,4], k = 2
console.log(findKthLargest(n, k)); 



/**
 *
 *
 * @param {*} nums
 * @param {*} k
 * @returns
 */
const findKthLargest2 = function(nums, k) {    // 数组排序(降序) 然后取第k个数  
   nums.sort((a,b)=> {
       return b -a
   }).slice(0,k)   // slice(a,b)截取到第k个元素 
  
   return nums[k-1] 
}

console.log(findKthLargest2([3,2,1,5,6,4], k = 2));






const findKthLargest3 = function(nums, k) {      // 快排 分左右 
   
    // 取任意基准值 
   let curr = nums[0]

   let left = []

   let right = []
   
   // 循环遍历当前nums 并分别装入到两个数组中 
   for(let index = 0; index < nums.length; index ++) {
         if(nums[index] > curr) {
            left.push(nums[index])
         }
         if(nums[index] <= curr) {
             right.push(nums[index])
         }
   }
   
   // 表明基准是第k大的元素  
   if(left.length + 1 == k) {
       console.log('curr===>',curr);
     return curr
   }
   // 如果left.length大于等于k 说明第k大的数是在left中
   else if(left.length >= k) {
       console.log('左区间====>');
      return findKthLargest3(left, k)
   }
   // 反之在右节点
   else {
      console.log('右区间=====>');
       return findKthLargest3(right, k.left.length - 1)   // 参数 
   }
}


console.log(findKthLargest3([3,2,1,5,6,4], k = 2));