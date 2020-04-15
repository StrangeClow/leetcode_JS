/**
 * 
 *   给定一个没有重复数字的序列，返回其所有可能的全排序
 * 
 *  input ===> [1,2,3]
 * 
 * output ===> 所有可能的1 2 3组合
 *
 * @param {*} nums
 * @returns
 */
const permute = function(nums) {        // 回溯递归 
 
    let res = []
    let temPath = []
   
    // 递归函数 
    let backtrack = (temPath) => {
        if(temPath.length === nums.length) {
            res.push(temPath)
            return 
        }
        
        // 循环刷当前给定数组值
        for(let index = 0; index < nums.length; index ++) {
            // 若temPath中没有nums[index] 继续下一步
            if(!temPath.includes(nums[index])) {
                 // 把nums[index]添加到数组末尾 
                 temPath.push(nums[index])
                 // temPath.slice()拷贝当前数组
                 backtrack(temPath.slice())
                 // 删除数组末尾的值 
                 temPath.pop()
            } 
        }
    }
    
    // 递归刷自身 入参 
    backtrack(temPath)

    return res
}


let n = [1,2,3,4,5]
console.log(n.push(6),n);
console.log(n.slice(), n);
console.log(n.pop(),n);

console.log(permute([1,2,3]));