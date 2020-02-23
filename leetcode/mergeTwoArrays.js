/**
 *  Definition for interval 
 *  function interval(start, end) {
 *    this.start = start;
 *    this.end = end
 }
 * 
 */

/**
 *    重叠区间  
 * 
 *        有几个整数数组，需要把这些数组重叠的区间尽可能合并，
 * 
 *   并返回合并后的数组   
 * 
 * 
 *   input ==>   [1, 5]  [2, 6]
 *   output ==>  [1, 6]
 * 
 * 
 *   
 * 
 *
 * @param {*} intervals
 * @returns
 */
const mergeTwoArrays = function(intervals) {
   
    // 定义基础变量
    let fStart = [], fEnd = [], res = []
   
    // 将start和end分别存入两个数组中
    for(let item in intervals) {

      fStart.push(fStart[item].start)

      fEnd.push(fEnd[item].end)

    }

    //  将两个数组分别排序  
    
}