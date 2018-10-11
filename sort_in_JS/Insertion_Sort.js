/*原理 数组分为两部分, 一部分为有序数组,一部分为无序数组, 
默认数组第一个元素为有序部分, 
然后从无序的数组中依次取出元素, 插入有序数组时比较大小,
再次变成一个有序数组, 最后有序部分就是排好序的, 无序部分就没了.

 在外部for循环中，设置变量 i 控制当前待插入元素的下标的移动；
 在内部for循环中，设置变量j用于控制待插入的值的比较和交换（左移到合适位置）
*/

/**
 *   直接插入排序
 * @param {*} arr
 */
function insertionSort_one(arr) {
  let len = arr.length,
    preIndex,
    time = 0,
    current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
      time ++;
      console.log(`当前是第${time}次比较`);
    }
    arr[preIndex + 1] = current;
  }
  console.log(arr);
  return arr;
}
insertionSort_one([987,18,0.01,826,1,88,0.009])
