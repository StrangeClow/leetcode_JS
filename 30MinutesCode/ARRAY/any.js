/**
 *   判断是否存在   对比 all.js   
 * 
 *    Array.some()
 *         .every()
 *         .all()
 * 
 *    some()
 * 
 *       1. 不创建新数组
 *       2. 不改变原数组
 *       3. 输出的是判断为true则马上跳出循环并return为true
 *       4. 
 *
 * @param {*} arr
 * @param {*} [fn=Boolean]
 */
const any = (arr, fn= Boolean) => arr.some(fn);


console.log(any([false,NaN]));        // 都为false
console.log(any([false,true,12]));    // 存在为true的值
console.log(any([true,1234]));    // 都为true