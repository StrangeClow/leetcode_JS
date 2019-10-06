/**
 *  统计简单数组中某个值出现的次数
 *
 * @param {*} arr  指定的简单数组
 * @param {*} val  指定的某一一个值
 */
const countOccurrences = (arr, val) => arr.reduce((prev,cur)
   =>(
       cur === val ? prev+1 : prev+0
    )
,0)