/**
 *  数组拆分 I 
 * 
 * 给定长度为2n的数组，你的任务是将这些数分成N对，例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
 * 
 * input==>: [1,4,3,2]
 * output===>: 
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 *
 * @param {*} nums
 * @returns
 */
const arrayPairSum = function(nums) {
    
    // 先数组排序
    nums.sort((a,b) => {
        return a -b
    })
    console.log(nums);
    
    // 基础变量 
    let res = 0
    let index = 0
    
    // 
    while(index < nums.length) {
        
        // 
       res += nums[index]
       index += 2
    }

    return res
}



let n = [1,4,3,2]
console.log(arrayPairSum(n));





const arrayPairSum2 = function(nums) {    // 排序 过滤 累加 

 
    return nums.sort((a,b)=> {       // 数组排序
        return a -b
    }).filter((item,index)=> {   // 数组过滤
        console.log('filter子节点====>',item,index);
        return index %2 === 0
    }).reduce((prev, curr,index,arr)=>{   // 数组累加
        console.log('prev, curr,index,arr====>',prev, curr,index,arr);
        return prev + curr
    },0)
}


console.log(arrayPairSum2(n));