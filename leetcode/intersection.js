/**
 *     采用数组常用的API形式  结合set的特性
 *
 * @param {*} nums1
 * @param {*} nums2
 * @returns
 */
const intersection = function(nums1, nums2) {
   return [...new Set(nums1.filter(v =>
     nums2.includes(v))     // inclues判断是否存在
    )
    ]
}