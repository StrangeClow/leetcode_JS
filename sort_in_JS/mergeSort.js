/**
 *  归并排序
 *     归并排序是建立在归并操作上的一种有效的排序算法，该算法采用分治法
 *  的一个典型的应用场景
 * 
 *   归并是将两个或以上的有序表组合成新的有序表，假设初始阶段有N个记录，则可以看成是
 * N个有序的子列表，每个子序列的长度为1，然后两两归并，得到2/n 个长度为2的有序的子序列，
 * 再两两归并  如此重复，知道得到一个长度为n的有序序列为止，这种排序方法
 * 也被成为 2-路归并排序 
 * 
 * 
 *     将原数组不断拆分 直到长度为1 不断将已排序数据合并直到再次合并陈原数组
 *
 */

 // 基础方法
 function merge(left,right) {
     let result = []
     while(left.length >0 &&  right.length >0) {
      if(left[0] <= right[0]) {  // 若左侧数据小于右侧，将左侧取出，放到新数组中
         result.push(left.shift())   // shift() 删除数组的第一个元素，并返回第一个元素的值
      } else {
          result.push(right.shift())
      }
     }
     while(left.length) {
        result.push(left.shift())
     }
     while(right.length) {
       result.push(right.shift())
     }
     return result  
 }


 function mergeSort(arr) {
  if (arr.length < 2) {   // 处理边界情况
      return arr
  }
  let middleArr = Math.floor(arr.length / 2),   // 将无需数组划分为两个数组
      leftArr = arr.slice(0,middleArr),
      rightArr = arr.slice(middleArr,arr.length)
    return merge(mergeSort(leftArr),mergeSort(rightArr))   // 递归调用，分别对左右两部分数组并行排序合并
 }