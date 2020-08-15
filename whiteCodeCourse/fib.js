function fib(n) {
  if(typeof n !== 'number') {
    throw new Error('输入的数据类型非法')
  }
  if(n >=0 && n < 2) {
   
     return n
  }
  return fib(n-1) + fib(n-2)
}


console.log(fib(2));
console.log(fib(3));
console.log(fib(6));
console.log(fib(7));




// 函数声明会被提升  函数表达式不会被提升  类比变量声明 




/**   
 * 
 *   优化斐波那契数列问题  
 *      采用动态规划  
 *          1. 由底向上分解问题
 *          2. 通过变量已经计算过的解
 * 
 *      尾递归
 *      
 *      存储变量
 * 
*/ 


//  尾递归  最后一步操作调用自身 
const fib2 = function(n, current = 0, next = 1) {
  if(typeof n !== 'number') {
     throw new Error('数据类型不合法')
  }
 if(n == 0)  return 0

 if(n == 1)  return next
  console.log(`fib2===>${n}`,`fib2====>${next}`,`fib2====>${current+next}`);
 return fib2(n -1, next, current + next)
}


console.log(fib2(1));
console.log(fib2(2));
console.log(fib2(3));
console.log(fib2(4));
console.log(fib2(5));
console.log(fib2(6));
console.log(fib2(7));




//  es6解构赋值 
const fib3 = function(n) {
  let current = 0
  let next = 1
  // 遍历数值n的长度 
  for(let index = 0; index < n; n ++) {
      [current, next] = [next, current + next]
  }
  return current
}

console.log(fib3(5));
console.log(fib3(6));
console.log(fib3(7));





const fib4 = function(n) {    // 缓存记忆当前数据结果
  if(typeof n !== 'number')  {
    throw new Error('输入数据不合法')
  }
  
  const cache = {
    '0' :  0,
    '1' : 1
  } 

  function helper(n) {
    // 若n存在于定义的cache中
    if(n in cache) return cache[n]
    const res = helper(n -1) + helper(n - 2)
    cache[n] = res
      return res
  }
  return helper(n)

}


console.log(fib4(4));
console.log(fib4(5));
console.log(fib4(6));
console.log(fib4(7));
console.log(fib4(8));