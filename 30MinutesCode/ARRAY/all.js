/**
 *   判断是否全为真 
 *
 * @param {*} arrr    
 * @param {*} [fn=Boolean]   默认值
 */
const all = (arrr, fn= Boolean) => arrr.every(fn);   


// 利用了es6的every    判断真值