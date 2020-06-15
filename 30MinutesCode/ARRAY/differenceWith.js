/**
 *  通过比较函数比较两个函数的差异  
 *
 * @param {*} arr
 * @param {*} val
 * @param {*} comp
 * @returns
 */
const differenceWith1 = function(arr, val, comp) {
    
    return arr.filter((item, index)=> {
        // arr.findIndex() 返回符合条件的第一个数组的位置 
        return val.findIndex((minItem, minIndex)=> {

            return comp(item, minItem)
        }) === - 1
    })
}

let n1 = [1,1,2,1.5,3,0]
let n2 = [1.9, 3, 0]

const comp = function(a,b) {   // 函数名 
    return Math.round(a) === Math.round(b)
}


console.log(differenceWith1(n1,n2,comp));