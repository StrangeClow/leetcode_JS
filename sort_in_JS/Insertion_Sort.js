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
            time++;
            console.log(`当前是第${time}次比较`);
        }
        arr[preIndex + 1] = current;
    }
    console.log(arr);
    return arr;
}
insertionSort_one([987, 18, 0.01, 826, 1, 88, 0.009])

/**
 * c 插入排序第二种方法
 * @param {*} arr
 */
function insertionSort_two(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log('第二种插入排序:', arr)
    return arr
}

insertionSort_two([9898, 6556, 0.01, 987654, 0.098, 1, 0.1098522])


function insertionSort_three(array) {
    let times = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                times++;
                console.log(`第${times}次执行`)
            }
        }
    }
    console.log('优化比较次数', array)
    return array
}

insertionSort_three([100,98765412,0.0008, 98765, 12, 0.9, 84, 5682,0.09])

/*  各个排序的区别 以及关键点部分的写法 在比较上  */

  Array.prototype.insertion_Sort = function() {
              let i, j;
              for (i = 0; i < this.length; i++) {
                  for (j = 0; j < i; j++) {
                      if (this[j] > this[i]) {
                          this.splice(j, 0, this[i])
                          tis.splice(i + 1, 1)
                          break
                      }
                  }
              }
              return this
          }
          // eg:   [3,5,2,11,1,2,"abc","zfd","sad","eng"].insertion_Sort();
  
  //  插入排序
  function insertionSort_four(arr) {
   /**
   * slice(8,-1)意思是从第8位开始（包含第8位）到最后一位之前（-1的意思就是最后一位，不包含最后一位）；
   *   Object.prototype.toString.call(boj)这个是用来判断数据类型，
   */
     if(Object.prototype.toString.call(arr).slice(8,-1) === "Array") {
          for(let i = 0; i< arr.length; i++) {
             let key = arr[i];
               for(let j = i-1;j<arr.length;j++) {
                arr[j+1] = arr[j];
               }
           arr[j+1] = key;
          }
           return arr;
        }
        else {
           return "arr is not a Array";
        }
  }

insertionSort_four([0.98,95685,10,93,0.008]);
