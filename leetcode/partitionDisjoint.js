/**
 *  分割数组 
 * 
 * 给定一个数组A,将其划分为两个不相交(没有公共元素)的连续子数组left和right，
 *
 * @param {*} arr
 * @returns
 */
const partitionDisjoint = function(arr) {
   
    let n = arr.length
    
}



//  判断对象是否为空 

//    1. Object.keys()

let isEmptyObj = function(obj) {

  return  !Object.keys(obj).length 

}


//  Array.prototype.slice.call(arrLike)   将类数组对象转化为数组  

let a = {}

let b = {
    name: 'js'
}

console.log(isEmptyObj(a));
console.log(isEmptyObj(b));



// 2. JSON.stringfly()

let isEmptyObj2 = function(obj) {
    return JSON.stringify(obj) === '{}'
}



// 3. for in遍历对象的属性  

let isEmptyObj3 = function(obj) {
  for(let key of obj) {
           return false
  }
  return true
}