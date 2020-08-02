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
console.log(timeTaken(()=> Math.pow(2,10)));