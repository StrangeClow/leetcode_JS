/**
 *    简易数组去重 
 *
 * @param {*} arr
 * @returns
 */
const uniqueArrFun = function(...arr) {

    // new Set()  
    // ...展开  
    // new Set之后为Set类型的数据结构 Array.from(set)转为数组结构 
   return (new Set(...arr))
}

let n1= [1,23,45,6,7,1,23]
console.log(uniqueArrFun(n1));






const uniqueArrFun2 = function(arr) {

    // 把类数组转化为数组 agruments数据
    // Array.from()

    // es6的新数据结构  Set 
    return Array.from(new Set(arguments[0]))
}

let n2 = [12,34,1,2,34,56]
console.log(uniqueArrFun2(n2));


 //  Object.prototype.toString.call(arr) === [object, Array]


 const uniqueArrFun3 = function(arr) {
    
     let tempMap = new Map()

     for(let item of arr) {
        
         if(!tempMap.has(item)) {
            tempMap.set(item, item)
           
         }
     }
    
     return Array.from(tempMap.values())


     let tempArr = []
      tempMap.forEach((item,index)=>{
         tempArr.push(item)
     } )
     return tempArr
 }

let n3 = [11,28,35,45,50,11,4,35]
console.log(uniqueArrFun3(n3));






const uniqueArrFun4 = function(arr) {
    let res = []

    for(let item of arr) {
      // arr.indexof(某个值)  
      if(res.indexOf(item) === -1) {
         res.push(item)
      }
    }
    return res
}

let n4 = [1,1,2,3,4,5,7,8,7]
console.log(uniqueArrFun4(n4));




//  对象属性 