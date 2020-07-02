// 堆排序是一种利用堆的概念来排序的排序算法 分为两种方法
// 1. 大顶堆 每个节点的值都大于等于其子节点的值 在堆排序算法中用于升序排列 
// 2. 小顶堆 每个节点的值都小于等于其子节点的值 在堆排序算法中用于降序排序 

/*  
*   堆结构
*   保持堆性质
*   建堆
*   
*     堆是一种数据结构 可视为完全二叉树 (一个父节点最多分二叉 圆圈数字代表节点序号 
  可以看到一层层由左向右排列 )
*
*    堆的存储：堆由数组来实现，相当于对二叉树做层序遍历
*
*
*/

/*  
*   如何实现堆排序   （堆排序为原地排序算法）
*     1.  建堆  2. 排序   
*/

/**
 *
 *    基础方法  交换变量   或采取es6的解构赋值
 * 
 * @param {*} a
 * @param {*} i
 * @param {*} j
 */





/**
 *  堆应用主要是用来实现优先队列  
 *
 * @param {*} 
 * @param {*} 
 * @param {*} 
 */

function swap(a, i, j) {
  // 临时变量 
// let temp = a[i]
//     a[i] = a[j]
//     a[j] = temp
    
   // es6解构赋值
    [a[j], a[i]] = [a[i], a[j]]
}

function heapSort(arr) {
  
  let l = arr.length
  // 若只存在一个元素  则直接返回
  if(l <= 1) {
    return arr
  }
  
  if(l > 1) {
    // 建堆
    for(let i = Math.floor(l / 2); i >= 0; i --) {
        maxHeapify(arr, i, l)
    }
    // 堆排序
    for(let j = 0; j < l; j++) {
       swap(arr, 0, l - 1 - j)
       maxHeapify(arr, 0, l - 2 - j)
    }
    return arr
  }


  function maxHeapify(arr, i, size) {
    // 左子节点为2i+1  右子节点为2i+2
    let l = 2 * i + 1,  r = 2 * i + 2
    let largest = i
    
    // 若子节点比节点大 则标记
    if(l <= size && arr[l] > arr[largest]) {
       largest = l
    }

    if(r <= size && arr[r] > arr[largest]) {
        largest = r
    }

    // 若标记有子节点 则交换父子位置 并递归计算
    if(largest !== i) {
       swap(arr, i, largest)
       maxHeapify(arr,largest, size)
    }
  }

}


let n1 = [2,5,8,1,3,6,9,7]
console.log(heapSort(n1));