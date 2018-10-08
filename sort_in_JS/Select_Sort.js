/**
 *    选择排序（Selection sort）是一种简单直观的排序算法。
 * 它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
 * 直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法（比如序列[5， 5， 3]第一次就将第一个[5]与[3]交换，
 * 导致第一个5挪动到第二个5后面）。
 */


function a(b) {
    console.log(b*b);
    return b*b;
}
a(10.87);

// function selectSort_one(arr) {
//     let len = arr.length,
//         temp,
//         minIndex;
//     for (let i = 0; i < len - 1; i--) {
//         minIndex = i;
//         for (let j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 // 寻找最小的数据
//                 minIndex = j;
//             }
//         }
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     console.log("arr选择排序:", arr);
//     return arr;
// }

// selectSort_one([100, 0.012, 0.1, 1001, 10, 0.0, 10000]);

function selectSort_two(array) {
    var len = array.length;
    for (var i = 0; i < len - 1; i++) {
        //这里之所以是len-1，是因为到最后两个元素，交换位置，整个数组就已经排好序了。
        var minnum = array[i];
        for (var j = i + 1; j < len; j++) {
            // j=i+1是把与自己比较的情况给省略掉
            if (array[j] < minnum) {
                var c;
                c = minnum;
                minnum = array[j]; //交换两个值
                array[j] = c;
            }
        }
        array[i] = minnum;
    }
    console.log('object',array);
    return array;
}

selectSort_two([10, 2, 698, 200, 0.1]);
