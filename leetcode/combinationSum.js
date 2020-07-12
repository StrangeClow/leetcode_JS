/**
 *  组合总和
 * 
 *    给定一个无重复元素的数组candidates和一个目标数target，找出canditates中所有可以使数字和为target的组合。
 * 
 * eg ： 
 *
 * @param {*} candidates
 * @param {*} target
 * @returns
 */
const combinationSum = function(candidates, target) {        // 递归回溯+剪枝
    
   let res = []
   let tempArr = []
   
   // 不重复数组排序 
   candidates = candidates.sort((a, b)=> {
       return a - b
   })

  // 递归子函数 
   let backtrack = function(tempArr, target, start) {
       if(target == 0) {
           res.push(tempArr)
           return 
       }

       for(let index  = start; index < candidates.length; index++) {
            
        if(target < candidates[index]) {
            break
        }
        tempArr.push(candidates[index])
        
        // arr.slice()复制数组副本
        backtrack(tempArr.slice(), target - candidates[index], index)
        
        // 删除数组首个元素并返回
        tempArr.pop()

       }
      
   }

   backtrack(tempArr, target, 0)

   return res

}



let c = [2,3,6,7,1,4], t = 7


console.log(combinationSum(c, t));




const combinationSum2 = function(arr, target) {   // 剪枝(通过某种判断 去掉不必要的遍历过程)

    let copyArr = arr.sort((a,b) => {
        return a - b
    })


}