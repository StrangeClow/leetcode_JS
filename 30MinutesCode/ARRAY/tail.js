/**
 *  返回剔除第一个元素后的数组 
 *
 * @param {*} arr
 * @returns
 */
const tail = function(arr) {     // arr.splice(start, end)
  if(arr.length > 1) {
    return arr.slice(1)
  }
   else {
       return arr
   }
}


const tail3 = arr => (arr.length > 1 ? arr.slice(1) : arr)


/**
 *
 *
 * @param {*} arr
 * @returns
 */
const tail4 = function(arr) {
  return arr.filter((item,index)=> {
      // 拿索引
      if(index !== 0) {
        return item
      }
  })
}

let n1 = [1,2,3,4,5,6,7]
let n2 = [2]
let n3 = [2,343,4656,7787878]
let n4 = [99,66.90,6767,2323,12345,67]

console.log(tail(n1));
console.log(tail(n2));
console.log(tail(n3));
console.log(tail3(n3));
console.log(tail4(n3));
console.log(tail4(n4));
