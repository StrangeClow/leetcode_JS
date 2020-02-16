/**
 *    存在重复元素
 *       利用set的特性去重解决问题 
 *
 * @param {*} nums
 * @returns
 */
const containsDuplicate = function(nums) {
  
  // new Set()存储不重复的元素  若去重后的数据量小于原数据量 则存在重复项
  return new Set(nums).length < nums.length
}