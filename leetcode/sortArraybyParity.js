/**
 *   按奇偶排序数组  
 * 
 *       给定一个非负整数数组A，返回一个数组，在该数组中，A中的所有偶数元素之后跟着所有奇数元素
 *   
 *   input==> [3,1,2,4]
 *   output==> [2,4,3,1]
 *   输出[4,2,3,1],[2,4,1,3],[4,2,1,3]也会被接受   
 * 
 *    只要偶数在奇数前面就可以
 *
 * @param {*} num
 * @returns
 */
const sortArraybyParity = function(num) {
  let tempArr = []
  num.forEach((element,index) => {
      // 偶数特性
      if(element % 2 === 0) {
         console.log('偶数',element);
         // unshift插入数组开头
         tempArr.unshift(element)
      } else {
          // push添加到数组末尾
          console.log('奇数',element);
          tempArr.push(element)
      }
  });
  return tempArr
}


let a1 = [2,3,4,1]
let a2 = [6,5,2,8,9,76,101,99]
console.log(sortArraybyParity(a1));
console.log(sortArraybyParity(a2));