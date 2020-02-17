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




//  第二种   哈希表解决 

const intersectionTwo = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    for (const key in set1.values()) {
      !set2.has(key) && set1.delete(key)
    }
    return [...set1]
}