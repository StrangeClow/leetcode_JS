/**
 *    存在重复元素
 *       利用set的特性去重解决问题 
 *
 * @param {*} nums
 * @returns
 */
const containsDuplicate = function(nums) {
  return new Set(nums).length < nums.length
}