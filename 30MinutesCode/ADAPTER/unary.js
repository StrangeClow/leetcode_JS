/**
 *   
 *
 * @param {*} fn
 */
const unary = fn=> val =>fn(val)

console.log(['6', '8', '10'].map(unary(parseInt))); 

// output []6,8,10



let n = [1,2,3,4,5]



