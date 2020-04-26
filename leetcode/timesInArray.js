/**
 * 数组中数字出现的次数 II
 * 
 *  在一个数组中除一个只出现一次以外，其他数字都出现了三次 请找出那个只出现一次的数字 
 * 
 * 输入：nums = [3,4,3,3]  
 * 输出：4
 *
 * @param {*} nums
 * @returns
 */
const timesInArray = function(nums) {

//   const tempSet = new Set()

//   return Array.from(nums.reduce((prev,curr)=>{

//     !prev.has(curr) ? prev.add(curr) : (tempSet.has(curr) ? prev.delete(curr) : tempSet.add(curr))

//  },new Set())) 

 const temp = new Set()
  
 // Array.from()
 // arr.reduce(prev,curr,index,arr) 
 return Array.from(nums.reduce((t, num) => {
     
    // a ? b : c
     !t.has(num) ? t.add(num) :(temp.has(num) ? t.delete(num) : temp.add(num))

     return t

 }, new Set()));


}



console.log(timesInArray([3,4,3,3]))