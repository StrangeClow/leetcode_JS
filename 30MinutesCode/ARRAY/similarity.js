/**
 *   获取两个数组的交集  两边都有的元素
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
const similarity  = function(arr1,arr2) {

    return  arr1.filter((item)=> {
        
        // es6 includes() 是否存在 
        return arr2.includes(item)
        
    })

}



let n1 = [1,2,3,4]
let n2 = [2,3,6,8]

console.log(similarity(n1,n2))





/**
 *
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
const similarity2 = function(arr1, arr2){     // 双循环 
    
      // 即存在于arr1中，又存在于arr2中

      return arr1.forEach((item, index)=> {
         console.log('item, index====>',item,index);
      })
    
    // 1. 分别过滤A B中重复的数据 

    // 2. 循环
}