/**
 *   判断是否全为真 
 *
 * @param {*} arr  
 * @param {*} [fn=Boolean]   默认值
 */
const all = (arr, fn= Boolean) => arr.every(fn);   


// 利用了es6的every循环全真才为真     // some


let n1 = [1,2,3,false,true, NaN, Boolean]
console.log(all(n1));

let n2 = [1,2,3,true, Boolean]
console.log(all(n2));


