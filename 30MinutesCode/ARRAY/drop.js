/**
 *  删除元素  
 *
 * @param {*} arr  要删除的元素列表 
 * @param {number} [n=1]  
 * 
 * 
 *  slice() 从已有的数组中返回选定的元素  
 *     
 *          1. Array/Object.slice(start, end) =====> start起止位置  end====>结束位置
 * 
 * 
 */
const drop = (arr, n = 1) => arr.slice(n);


let arr = [12,34,56,78,90]

console.log(drop(arr,1));


let arr1 = [12,34,56,78,90]

const drop2 = function(arr, n) {
    // console.log(arr);
     arr.splice(0,n)
     return arr
}

console.log(drop2(arr1,1));

