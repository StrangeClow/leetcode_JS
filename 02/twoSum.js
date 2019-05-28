/**
 *  给定义一个证书数组和目标值 找出对应数组中和未目标值的两个数
 * 
 */

 var twosUM = function(nums,target) {
    let hash,result;
    nums.forEach( (v, i)=> {
        if (typeof hash[v] !== "undefined") {
            result[0] = i;
            result[1] = hash[v];
        }
        hash[target - v] = i;
    });
    return result;
 }