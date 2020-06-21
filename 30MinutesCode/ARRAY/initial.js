/**
 *  删除数组中的最后一个元素 
 *
 * @param {*} arr
 * @returns
 */
const initial = function(arr) {
  // slice()  不同参数   
  return arr.slice(0, -1)
}

let n = [12,34,45,67,8]
console.log(initial(n));

const initial2 = (arr) => {
  arr.pop() 
  return arr
} 
console.log(initial2(n));


const initial3 = function(arr) {
  arr.splice(arr.length - 1, 1)
  return arr
}

let n1 = [43,56,7878,3434,90]
console.log(initial3(n1));