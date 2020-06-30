/**
 * 快速排序利用了分治法的思想，找到基准点，然后将集合分成以基准点左右的两个子集合
 * 
 *  拆分思想  分到更小的节点   
 *
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  // 当数组成都小于等于1时 直接返回原数组
  if(arr.length <= 1) {
     return arr
  }
  // 拿到数组长度的一半 
  let middleArrIndex = Math.floor(arr.length / 2)
  //  选择一个中间的数字作为基准点  
  let middleArr = arr.splice(middleArrIndex,1)[0]    // splice（index，1）返回数组中被删除的那个数
  console.log('middleArr===',middleArr);
  let leftArr = []
  let rightArr = []

  // 循环判断，比中间值小的放在左边，比中间值大的放在右边
  for (let index = 0; index < arr.length; index++) {

     if(arr[index] <= middleArr) {
       // 准备左侧数据
       leftArr.push(arr[index])
     }
     else {
       // 准备右侧数据
         rightArr.push(arr[index])
     }
  }
  // 递归调用自身
  console.log('分别指===',leftArr,rightArr,middleArr);
  return quickSort(leftArr).concat([middleArr],quickSort(rightArr));

}

let n = [1,5,9,7,2,5,10,8,99,0,-0.7,99996]
console.log(quickSort(n));

// 优化解决方案   原地分区 不用创建新变量


const quickSort2 = function(arr) {       // 这个有问题   待审查 
  let curr = arr[0]
  
  let middleArrIndex = Math.floor(arr.length / 2)
  let middleArr = arr.splice(middleArrIndex,1)[0]    // splice（index，1）返回数组中被删除的那个数  取出基准数 并去除

  let left = []

  let right = []

  if(arr.length <= 1) {
    return arr
  }

  for (let index = 0; index < arr.length; index++) {

    if(arr[index] <= middleArr) {
      // 准备左侧数据
      left.push(arr[index])
    }
    else {
      // 准备右侧数据
        right.push(arr[index])
    }
 }
 // 递归调用自身
 console.log('分别指===',left,right,middleArr);
 return quickSort2(left).concat([middleArr],quickSort2(right));
}

console.log(quickSort2([1,5,9,7,2,5,10,8,99,0,-0.7,99996]));





