/**
 *    求取平均值
 *
 * @param {*} nums
 */
const average = (...nums) => nums.reduce((acc,val)=> acc+ val, 0) / nums.length