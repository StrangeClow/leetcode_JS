/**
 *  统计简单数组中某个值出现的次数
 * 
 *    reduce迭代
 *
 * @param {*} arr  指定的简单数组
 * @param {*} val  指定的某一个值
 */
const countOccurrences = (arr, val) =>
  arr.reduce((prev,cur)=>
  (
       cur === val ? prev+1 : prev+0
    )
,0)



const CountNumber = function(arr, val) {
  // 初始计量单位

 return arr.reduce((prev,cur)=>
  (
       cur === val ? prev+1 : prev
    )
,0)
   
}



//  test  

let aa = [11,22,33,76,87,57,76,89,22,23,22,45,22,25,35,33]

console.log('一组值中的指定值个数为：',countOccurrences(aa,33));





console.log(CountNumber(aa,33));





/**
 *    某一个数在当前数组中出现的次数  
 *
 * @param {*} arr
 * @param {*} targetNum
 * @returns
 */
const CountNumber2 = function(arr, targetNum) {
    
     //  循环累加出现的次数  循环子项是否等于当前目标值 
}

console.log(CountNumber2(aa,33));