/**
 *  返回列表的第一个
 *   
 *   取数组的第一个值 
 *
 * @param {*} arr
 */
const head= arr => arr[0]


let n1 = [1,2,3,4,5]
console.log(head(n1));     // output===> 1




const head2 = function(arr) {
    // arr.shift()   arr.unsfift()
    return arr.shift()
}


let n2 = [2,3,4,5]
console.log(head(n2));     // output===> 2