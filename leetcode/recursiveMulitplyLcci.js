/**
 *  递归乘法
 * 
 * 
 * 写一个递归函数，不适用*运算符，实现两个正整数相乘，可以使用＋ - 位移
 *
 * @param {*} A
 * @param {*} B
 * @returns
 */
const recursiveMulitplyLcci = function(A, B) {
   
   return caclucateNum(A, B, 0)

}



function caclucateNum(A, B, sum) {
    // 拿最小值
    let tempA = Math.min(A, B)
    // 拿最大值 
    let tempB = Math.max(A, B)

    if(tempA < 2) {
      return tempB + sum
    }
    sum+= tempB

    return caclucateNum(tempA - 1, tempB, sum)
}



let a = 3, b = 107

console.log(recursiveMulitplyLcci(a, b))