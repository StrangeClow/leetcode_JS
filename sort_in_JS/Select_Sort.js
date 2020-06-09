/**
 *    选择排序（Selection sort）是一种简单直观的排序算法。
 * 它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
 * 直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法（比如序列[5， 5， 3]第一次就将第一个[5]与[3]交换，
 * 导致第一个5挪动到第二个5后面）。
 */

function a(b) {
    console.log(b * b);
    return b * b;
}
a(10.87);

/**
 * 1. 理解选择排序的原理
 * 1.1  首先循环一遍 把最小(最大)的排在最前(后)面，将它与第一(倒数第一)的一个元素交换位置
 * 1.2 接下来在最小的元素中寻找最小的元素，将它与第二小(大)的元素交换位置 以此内推 直到将整个数组排序完成
 * @param {*} arr
 */
function selectSort_One(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            //  通过循环比较找出数组中最小的元素 排在当前元素的第一(最后)一位，
            if (minNum < arr[j]) {
                console.log("当前的minNum:", minNum, "当前的arr[j](最大值):", arr[j]);
                [minNum, arr[j]] = [arr[j], minNum];
                // minNum = [arr[j], arr[j] = minNum][0];
            }
        }
        arr[i] = minNum
        console.log('比较后:',arr);
    }
    
    return arr
}
selectSort_One([0.1,10,1,10.98]);
selectSort_One([98765, 1000, 0.1, 0.01, 10, 9.88, 0.09]);
selectSort_One([0.098, 1000, 1, 98765, 0.984635, 87]);


/**
 *
 *
 * @param {*} array
 * @returns
 */
function selectSort_two(array) {
    var len = array.length;
    for (var i = 0; i < len - 1; i++) {
        //这里之所以是len-1，是因为到最后两个元素，交换位置，整个数组就已经排好序了。
        var minNum = array[i];
        for (var j = i + 1; j < len; j++) {
            // j=i+1是把与自己比较的情况给省略掉
            if (array[j] < minNum) {
                // 使用中间变量 
                    // var c;
                    // c = minNum;
                    // minNum = array[j]; //交换两个值
                    // array[j] = c;

                // es6解构赋值
                 [minNum, array[j]] = [array[j], minNum]
            }
        }
        array[i] = minNum;
    }
    return array;
}


let a1 = [10, 2, 698, 200, 0.1]
console.log('选择排序第二种方式的',selectSort_two(a1))

/**
 * 1. 理解选择排序的原理
 * 1.1  首先循环一遍 把最小(最大)的排在最前(后)面，将它与最小(大)的一个元素交换位置
 * 1.2 接下来在最小的元素中寻找最小的元素，将它与第二小(大)的元素交换位置 以此内推 直到将整个数组排序完成    
 * @param {*} arr
 */
function selectSort_Three(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                //寻找最小的数
                minIndex = j; //将最小数的索引保存
                console.log("minIndex：", minIndex);
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log("选择排序的第三种方法：", arr);
    return arr;
}
selectSort_Three([10, 900, 0.1, 1, 68]);


function arrSort3(arr) {     // 第一步先拿出arr.Math.max()或arr.Math.min()的元素
    var len = arr.length,
        minIndex, 
        nu
    for (var i = 0; i < len - 1; i++) {
        minIndex = i; //记录每次循环的第一个数为该次循环的最小值索引
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; //找到每次循环到的最小值，
            }
        }
        nu = arr[i];
        arr[i] = arr[minIndex]; //将找到的最小值放在每次循环的最开始的地方；  顺序排序 
        arr[minIndex] = nu;

    }
    return arr
}


let n5 = [1,9,2,4,7,5,6,10]
console.log(arrSort3(n5));