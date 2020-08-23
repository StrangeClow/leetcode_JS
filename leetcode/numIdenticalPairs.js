/**
 *  好数对的数目
 * 
 *     给定一个整数数组nums,如果一组数字（i,j）满足nums[i] == nums[j] 且 i< j ,就可以认为这是一对好数对，返回好数对的数目。
 *
 * @param {*} nums
 */
const numIdenticalPairs = function(nums) {   // 双循环
    if(! nums instanceof Array) {
        throw new Error('请输入合法的数据类型')
    }
    let count = 0
    for(let i = 0; i < nums.length; i++) {
       for(let j =  0; j < nums.length; j ++) {
          if(nums[i] == nums[j] && i < j) 
             count ++
          
       }
    }
   return count 
}


let n = [1,2,3,1,1,3]
console.log(numIdenticalPairs(n));