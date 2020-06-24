/**
 *   顺序查找(又称为线性查找)  
 *      将每一个数据结构中的元素和我们要找的元素比较，顺序搜索是最低效的一种算法。
 *
 * @param {*} arr
 * @returns
 */
const sequential_Search = function(arr, target) {       //  
    // 每个子项都必须走一遍 
    for (let index = 0; index < arr.length; index++) {
       // 数组的某一项index等于目标项
        if(arr[index === target]) {

            return index
        }
        return - 1 
    }
}



let n1 = [1,3,6,0,3,6,9,2], target = 9
console.log(sequential_Search(n1, target));