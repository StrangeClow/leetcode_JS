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

function bubbleSort(arr) {
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

bubbleSort([99, 55, 66, 11, 0.08, 999999]);


(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // 此处进行判断 
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
        console.log(arr);
        return arr
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
    console.log('arr:', arr);
    return arr
}

bubbbleSort_one([0.18, 1, 0.0, 8952, 369, 225, 0.008, 98432]);



function bubbbleSort_two(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                // es6解构赋值
                // a = [b,b=a][0];
                arr[j + 1] = [arr[j], arr[j] = arr[j + 1]][0];
            }
        }
    }
    console.log('arr:', arr);
    return arr
}

bubbbleSort_two([0.1878, 1, 0.0, 8952, 89, 369, 7225, 0.0008, 98765432]);