/**
 *    返回数组中的最大值    
 *
 *     ... 扩展运算符   展开数组里的每个值 
 *   
 *     Math.max（） 返回一组数值中的最大值 
 *
 * @param {*} arr
 */
const arrayMax = arr => Math.max(...arr)


const arrayMaxTwo = function(arr) {
    console.log(arr);
    return Math.max(arr)
}


let a = [1,2,3,4,5,6,7,8,9]

let b= (11,22,33,44,75,895)

console.log('求取最大值===》',arrayMaxTwo(b));

console.log(arrayMax(a));