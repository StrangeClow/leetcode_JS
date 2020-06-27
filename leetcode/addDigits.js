/**
 *  各位相加 ()
 *    
 *     给定一个非负整数num,反复将各个位的数字相加，直到结果为一位数。
 * 
 *   input===> 38
 *   ouput===>  2
 *   实现过程为： 3+8 = 11， 1 +1 = 2 由于2是一位数，返回2
 *
 * @param {*} num
 * @returns
 */
const addDigits = function(num) {
  
  // 循环当前数据 大于等于10
  while(num >= 10) {
    // 转字符串再转数组 
     // 必要的条件 判断 
      num = num.toString().split('').reduce((prev, curr)=> {
        // 累加当前值与前值并计数
        
        return parseInt(prev) + parseInt(curr)
      },0)
  }
  
  return num
}


console.log(addDigits(38));




// 找规律
const addDigits2 = function(n) {
  if(!n) {
   return 
  }
  if(n % 9 === 0 && num !== 0) {
    return 9
  }
  
  return n % 9
}

addDigits2(12)





let obj  = {}

function add(x, y) {
  return x * y
}

// 函数的几种不同的调用方式   apply  call
console.log(add.apply(obj, [2,3]));
console.log(add.call(obj, 2,9));


let aObj = {
  name: 'js',
  getName: function(x) {
    console.log('x===>',x);
    console.log('this=====>',getName.call(aObj,x));
     return x
  }
}


console.log(aObj);
console.log(aObj.getName('数据结构'));

