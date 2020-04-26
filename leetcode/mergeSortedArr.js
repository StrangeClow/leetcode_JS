/**
 *    合并排序的数组 
 * 
 *        给定两个排序后的数组A和B，其中A的末端有足够的缓冲空间容纳B，编写一个方法，
 * 将B合并入A并排序
 * 
 * 
 * 初始化A和B的元素数量分别为m和n
 * 
 *   input  ===>   A [1,2,3,0,0,0],   m = 3
 *                 B [2,5,6],  m = 3
 * 
 *   output ===>  [1,2,2,3,5,6]
 * 
 *   说明 A.length = m + n
 * 
 *     方法1. 直接合并后排序
 *        2.  双指针
 *        3. 逆向双指针
 *
 * @param {*} A
 * @param {*} m
 * @param {*} B
 * @param {*} n
 * @returns
 */
const mergeSortedArr = function(A, m, B, n) {
   
    // arr.splice(start, end, num)
    A.splice(m, n, ...B)
    
    // 数组排序 
    return A.sort((a, b)=> a - b)
}


A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

console.log(mergeSortedArr(A,m,B,n));