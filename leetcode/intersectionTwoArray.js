/**
 *  题意： 求取两个数组的交集
 *
 * @param {*} nums1
 * @param {*} nums2
 * @returns
 */
var intersectionInTwoArrays = function(num1, num2) {
 const resultArr = []
 let maxLength = Math.max(num1.length,num2.length)    // 取两数组的最大长度
 for (let i = 0; i < maxLength;i++) {
    if (num2.includes(num1[i]) && !resultArr.includes(num1[i])) {    // es6数组方法includes
      resultArr.push(num1[i])
    }
  }
  return resultArr
}