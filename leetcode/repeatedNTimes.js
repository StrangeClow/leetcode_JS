/**
 *    重复n次的元素
 * 
 *  在大小为2n的数组中有n+1个不同的元素，其中一个元素重复了n次 返回重复了n次的这个元素 
 *
 * @param {*} A
 * @returns
 */
const repeatedNTimes = function(A) {
    
    let set = new Set()
    console.log(set)
    for(let item of A) {
       console.log(item)
       if(!set.has(item)) {
             set.add(item)
       } else {
           return item
       }
    }
}



let n = [1,2,3,3]
console.log(repeatedNTimes(n))




//    或者hash表 