/**
 *   判断是否全为真 
 *
 * @param {*} arrr    
 * @param {*} [fn=Boolean]   默认值
 */
const all = (arrr, fn= Boolean) => arrr.every(fn);   


// 利用了es6的every    判断真值


let n1 = [1,2,3,false,true, NaN, Boolean]
console.log(all(n1));

let n2 = [1,2,3,true, Boolean]
console.log(all(n2));