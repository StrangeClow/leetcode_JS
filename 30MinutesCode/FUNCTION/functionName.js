/**
 * 打印方法名
 *  fn.name
 *
 * @param {*} fn
 */
const functionName = fn=>(console.log(fn.name),fn)




function add(a,b) {
    return a + b
}


console.log(functionName(add));