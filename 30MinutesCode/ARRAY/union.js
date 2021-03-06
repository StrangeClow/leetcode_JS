/**
 *  返回两个数组的合集
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
const union = function(arr1, arr2) {
   // 先展开  
   // 再去重
   // 再转为数组 
   return Array.from(new Set([...arr1, ...arr2]))

}



let n1 = [1,2,3,4,5,12]
let n2 = [5,6,7,8,9,10]
console.log(union(n1,n2));      // 1 2 3 4 5 6 7 8 9 10 12



/**
 *
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
const union2 = function(arr1, arr2) {
    return new Set(arr1.concat(...arr2))
}

let n1 = [1,2,3,4,5,12]
let n2 = [5,6,7,8,9,10]
console.log(union2(n1,n2));     
