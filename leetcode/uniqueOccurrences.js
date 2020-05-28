/**
 *    独一无二出现的次数  
 * 
 *  给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 *
 * @param {*} arr
 * @returns
 */
const uniqueOccurrences = function(arr) {
   
    let map = new Map()
    for(let index = 0; index < arr.length; index++) {
      
      if(map.has(arr[index])) {
          console.log('object',arr[index]);
           map.delete(arr[index])
           
      }

      map.set(index,arr[index])
    }
    console.log(map);
}




let n = [1,2,2,1,1,3]
console.log(uniqueOccurrences(n));