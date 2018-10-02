/**
 *  十大经典算法排序
 *     1. 冒泡排序
 *    2.  选择排序
 *   3.  插入排序
 *   4. 希尔排序
 *  5.  归并排序
 *  6.  快速排序
 *  7. 堆排序
 *  8. 计数排序
 *  9. 桶排序
 *  10. 基数排序 
 */


/**
 *               冒泡排序 ： 它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、
 *       首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。
 */

function buuleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
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

buuleSort([99,55,66,11,0.08,999999]);
