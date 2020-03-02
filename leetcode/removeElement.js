/** 
 *  给定一个数组num和一个值val  你需要原地移除所有数值等于val的元素 返回移除后的数组的新长度
 * 
 * 
*/

var removeElement = function(nums,val) {
   for(let i = 0; i<nums.length;i++) {
       if(nums[i] == val) {
           nums.splice(i,1)
           i--;  // i递减  删除之后向前移动位置
       }
   }
   console.log('nums==>',nums)
   return nums.length
} 

let n1 = [1,2,4,6,8]
let t1 = 4

console.log('原地移除元素===>',removeElement(n1,t1))



/**
 *
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 */
const removeElement2 = function(nums, target) {
   
    // 先对数组排序 
    nums.sort((a,b) => {
        return a -b
    })
    console.log('nums排序后',nums)
    // indexOf某个字符首次出现在字符串中的位置 
    let index= nums.indexOf(target) 
    let i = index
    // 若不存在 
    if(index != -1) {
       while(nums[i] == target) {
          i++
       }
       let len = i -index
       nums.splice(index, len)
    }
    return nums.length
}

let n2 = [1,2,4,6,8,3,5]
let t2 = 8

console.log('原地移除元素===>',removeElement2(n2,t2))