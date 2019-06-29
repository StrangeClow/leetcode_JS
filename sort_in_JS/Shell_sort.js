/**
 *  希尔排序
 *    希尔排序是插入排序更高效的一种手段，它与插入排序不同的一点是，它会优先比较距离比较远的元素，希尔排序的核心在于间隔序列的设定
 *    既可以提前设定好间隔序列，也可以动态的定义间隔序列，
 *     希尔排序又称为"缩小增量排序"  
 *     
 *     分组 间隔分组比较 最后两两比较 类似冒泡排序  将数组进行分割 但比冒泡多了一层增量的概念     希尔排序的概念以及理解
 * 
 *   希尔排序的基本思想是 先将整个待排序的记录序列分割成为若干个子序列并分别并行排序 带整个序列中记录基本有序是， 在对全体记录依次进行直接插入排序
 */

function baseDirectSort(arr,gap) {   // gap 间隔
  gap = gap == undefined ? 1 :gap  // 默认下标1开始撕遍历
  var len  = arr.length,index, current;
  for(var i = gap; i < len; i++) {
    index = 1 = gap; // 待比较元素的下标
    current = arr[i]; // 当前循环的元素
    while(index >= 0 && arr[index] > current) {
    arr[index + gap] = arr[index]  // 将带比较元素后裔gap位
    index -= gap
    }
    if(index + gap != i) {  // 检测避免同一个元素赋值给自身
        arr[index + gap] = current; // 当前元素插入预留空位
    }
  }
  return arr
}


var shellSort = function(arr) {
    //    >>(有符号右移，该操作符会将第一个操作数向右移动指定的位数。向右被移除的位数被丢弃，拷贝最左侧的位来填充左侧)
    // eg：9 >> 2 得到 2
    var length = arr.length, gap = length>>1, current, i, j;
    while(gap > 0){
      directInsertionSort(arr, gap); //按指定步长进行直接插入排序
      gap = gap>>1;
    }
    return arr;
}