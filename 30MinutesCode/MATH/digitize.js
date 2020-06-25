/**
 *   把一串数字转化为一个数组 
 *
 * @param {*} n
 */
const digitize = function(n) {

 
  // ... 展开运算符构建一个新的数组
  console.log(n);
 return [...`${n}`].map((item)=> {

      // parseInt转化为整型数据
    return  parseInt(item)

  })
} 



// eg :
//   input : 12345
//   output: [1,2,3,4,5]

let n1 = 12345
console.log(digitize(n1));