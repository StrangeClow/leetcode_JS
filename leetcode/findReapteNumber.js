/**
 *    数组中重复的数字
 * 
 *       找出nums里重复的数字，可能为一个，也可能为多个 
 *
 * @param {*} nums
 * @returns
 */
const findReapteNumber = function(nums) {
     
   let tempSet = new Set()

   for(let i = 0; i < nums.length; i ++) {
       //Set存储不重复的元素 
      if(tempSet.has(nums[i])) {
          console.log('nums[i]',nums[i]);
            return nums[i]
      }
      
      tempSet.add(nums[i])
   }
   return 0
}


let a1 = [1,3,4,5,6,8,5,7,8]
console.log('寻找重复数==',findReapteNumber(a1));




const  findReapteNumber2 = function(nums) {
  
   let hash = {}
   for(let i of nums) {
   
      if(hash[i]) {
         return i
      }
      else {
         hash[i] = 1
      }
   }


}

console.log(findReapteNumber2([1,3,6,9,45,90,4,9]));



const findReapteNumber3 = function(nums) {

  
   let tempMap = new Map()

   for(let i of nums) {
      if(tempMap.has(i)) {
            
        return i

      }
      tempMap.set(i,i)
   }

}

console.log(findReapteNumber3([1,3,6,9,45,90,4,90]));