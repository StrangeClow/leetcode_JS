/**
 *    返回数组中的最大值    
 *
 *     ... 扩展运算符   展开数组里的每个值 
 *   
 *     Math.max（） 返回一组数值中的最大值 (非数组形式 )
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


console.log([1,9,0,2,8,5].sort())



// apply
const arrayMax3 = function() {
   
    return Math.max.apply(null,[2,34,67,78,9564])
}

console.log(arrayMax3());


// 
const arrayMax4 = function(arr) {
    return Math.max.apply(null, arr) //给入数组
}


console.log(arrayMax4([1,23,34,43,56,343]));




const arrayMax5 = function(arr) {
   // 
    return Math.max.call(null, ...arr)
}

let a6 = [1,2,3,4,9,7,8]
console.log(arrayMax5(a6));