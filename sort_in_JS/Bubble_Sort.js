/**
 *  十大经典算法排序
 *  1. 冒泡排序
 *  2. 选择排序
 *  3. 插入排序
 *  4. 希尔排序
 *  5. 归并排序
 *  6. 快速排序
 *  7. 堆排序
 *  8. 计数排序
 *  9. 桶排序
 *  10. 基数排序
 */

/**
 *       冒泡排序 ： 它重复地走访过要排序的元素列，依次比较两个相邻的元素，
 * 如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重
 * 复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。
 */




function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 正向排序
      if (arr[j] > arr[j + 1]) {
        var tempNumber = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tempNumber;
      }
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort([99, 55, 66, 11, 0.08, 999999]);



//  待改正
(function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 此处进行判断
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    console.log(arr);
    return arr;
  }
})([987, 456, 298, 786, 0.298]);




function bubbbleSort_one(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        // es6解构赋值
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  console.log("arr:", arr);
  return arr;
}

bubbbleSort_one([0.18, 1, 0.0, 8952, 369, 225, 0.008, 98432]);

function bubbbleSort_two(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        //根据运算符优先级，首先执行b=a，此时的b直接得到了a的变量值，然后一步数组索引让a得到了b的值（简直不能再厉害）
        // a = [b,b=a][0];
        arr[j + 1] = [arr[j], (arr[j] = arr[j + 1])][0];
      }
    }
  }
  console.log("arr:", arr);
  return arr;
}

bubbbleSort_two([0.1878, 1, 0.0, 8952, 89, 7225, 0.0008, 98765432]);

function bubbleSort_three(arr) {
  let len = arr.length,
    times = 0;
  for (let i = 0; i < len - 1; i++) {
    for (let j = len - i - 1; j >= 0; j--) {
      if (arr[j + 1] > arr[j]) {
        arr[j + 1] = [arr[j], (arr[j] = arr[j + 1])][0];
      }
      console.log("第" + ++times + "次排序后：" + arr);
    }
  }
  console.log("bubble_three", arr);
  return arr;
}

bubbleSort_three([100, 0.1, 10, 1000, 0.01, 0.11, 1100]);

//  双向冒泡排序
//  双向冒泡排序是冒泡排序的一个简易升级版, 又称鸡尾酒排序. 冒泡排序是从低到高(或者从高到
//   低)单向排序, 双向冒泡排序顾名思义就是从两个方向分别排序(通常, 先从低到高, 然后从高到低). 因此它比冒泡排序性能稍好一些.
function bothWayBubbbleSort(arr) {
  var tail = arr.length,
    i,
    isSwap = false;
  for (i = 0; i < tail; i++) {
    for (var j = tail; j > i; j--) {
      // 第一轮 先将最下的数据冒泡到前面
      arr[j - 1] > ar[j] && (isSwap = true) && swap(j, j - 1, arr);
    }
    i++;
    for (j = i; j < tail; j++) {
      // 第二轮 将最大地数据冒泡到后面
      arr[j] > arr[j + 1] && (isSwap = true) && swap(j, j + 1, arr);
    }
  }
  return arr;
}
