/**
 *  给定一组非负整数 重新排列表他们的顺序使其成为最大的整数 
 * 
 * eg :input== [10,2]   output == 210
 *     input== [3,30,34,5,9]  ouput == 9534330
 * 
 * 
 * @param {*} nums
 * @returns
 */
var largestNumber = function(nums) {
  // 首先判断特殊情况 处理数据边界问题
  if(nums.every(item=> item === 0)) {
    return '0'
  }
  else {
      return nums.sort((a,b)=> {   // arr.sort((a,b)=> a- b)
          [a,b] = [a.toString(),b.toString()]     // 解构赋值 交换变量
          return parseInt(a + b) > parseInt(b + a) ? -1 : 1
      // arr.join()转为字符串    
      }).join('')  
  }
}



let a1 = [10,2]
console.log(largestNumber(a1));

let a2 = [3,30,34,5,9]
console.log(largestNumber(a2));

let a = ['hello','world']    // join()不改变源数据
console.log(typeof a, a instanceof Array);
console.log(a.join(''));
console.log(a);
console.log(typeof a,a instanceof Array, typeof a.join('-'));