/**
 *  返回数组中指定值对应的数组索引
 *  
 * @param {*} arr
 * @param {*} val
 * @returns
 */
const indexofAll = (arr, val) => {
    const ifIncludes = []
    //  循环判断是否有值相等  
    arr.forEach((el, i) => el === val && ifIncludes.push(i))    // 存储匹配元素的索引 
    return ifIncludes
}



let n1 = [1,2,3,4,5,6]
console.log(indexofAll(n1,5));



const indexofAll2 = function(arr, val) {
   let target = []
    arr.map((item, index)=> {    // 如何思考  
       if(item === val) {
         
          target =  index
       }
    })
    return target
}


let n2 = [1,2,3,4,5,6]
console.log(indexofAll2(n2,5));

console.log(!!'');

var a = '40'
 var b = 7
 console.log(typeof (a%b));