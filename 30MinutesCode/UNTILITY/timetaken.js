/**
 *   计算一个函数执行的时间  
 *
 * @param {*} callback
 * @returns
 */
const timeTaken = callback => {
    console.time('timeTaken')
    const r = callback()
    console.timeEnd('timeTaken')
    return r
}


//   eg 

function add(a,b) {
   return a + b
}

console.log(timeTaken(add(10,20)));