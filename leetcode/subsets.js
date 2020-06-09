/**
 * 给定一组不含重复元素的整数数组nums,返回该数组所有可能的子集(幂集)
 * 
 * 说明： 解集不能包含重复的元素 
 *
 * @param {*} arr
 * @returns
 */
const subsets = function(arr) {              // 来源于leetcode  骚操作解法 
   
  // 迭代当前数组 
  return arr.reduce((res, num)=> {
      // 拼接当前项 拼接项为第一项循环拿到的子值 
    return  res.concat(res.map((item,index)=> {
      console.log('item===index ===',item, index)
        // 往后一层 继续
        return  item.concat(num)
      }))
  },[[]])

}


let num = [1,2,3]

console.log(subsets(num))




/**
 *  回溯
 *
 * @param {*} arr
 * @returns
 */
const subsets2 = function(arr) {

  let res = []

  const backtrack = function(nums, index, temp) {
      // temp.slice() 拷贝
      res.push(temp.slice())

      for(let i = 0; i < nums.arr.length; i ++) {
     
         temp.push(arr[i])

         backtrack(arr, o, [])
         
          return res
      }

  }
}




/**
 *
 *
 * @param {*} arr
 * @returns
 */
const subsets3 = function(arr) {
  return arrs
}