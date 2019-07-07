/**
 * 快速排序利用了分治法的思想，找到基准点，然后将集合分成以基准点左右的两个子集合
 *
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  // 当数组成都小于等于1时 直接返回原数组
  if(arr.length <= 1) {
     return arr
  }
  // 定义数组中间值
  var middleArrIndex = Math.floor(arr.length / 2)
  var middleArr = arr.splice(middleArrIndex,1)[0]    // splice（index，1）返回数组中呗删除的那个数
  var leftArr 
  var rightArr

  // 循环判断，比中间值小的放在左边，比中间值大的放在右边
  for (let index = 0; index < array.length; index++) {
     if(arr[i] <= middleArr) {
       leftArr.push(arr[i])
     }
     else {
         rightArr.push(arr[i])
     }
  }
  // 递归调用自身
  return quickSort(leftArr).concat([middleArr],quickSort(rightArr));

}

// 优化解决方案   原地分区 不用创建新变量