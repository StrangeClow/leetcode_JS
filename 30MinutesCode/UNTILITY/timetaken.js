/**
 *   计算一个函数执行的时间  
 *
 * @param {*} callback
 * @returns
 */
const timeTaken = callback => {       // console.tiem
    console.time('timeTakenStsrt')
    const r = callback()
    console.timeEnd('timeTakenEnd')
    return r
}


//   eg 

function add(a,b) {
   return a + b
}

console.log(timeTaken(add(10,20)));