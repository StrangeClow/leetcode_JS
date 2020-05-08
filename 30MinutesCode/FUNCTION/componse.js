/**
 *   执行从右到左的函数组合 
 *    
 *   arr.reduce((prev, curr, index, arr) => {
 *    
 *   })
 * 
 *
 * @param {*} fn
 * @returns
 */
const componse = function(...fn) {
  console.log('展开函数名=====',...fn)

  return fn.reduce((prev, curr)=> {                                 
      console.log('上一个函数===',prev, '当前函数===',curr)
      return (...args) => {
        console.log('展开args====',args)
          return prev(curr(...args))
      }
  })
}




const add5 = x => {
    return x +5
}

const multiply = (x, y) => {
    return x * y
}


const multiplyAndAdd5 = componse(add5, multiply)



console.log(multiplyAndAdd5(5, 2))