/**
 *  链式调用异步函数  
 * 循环遍历包含异步事件的函数数组，每次异步事件完成之后调用next
 *
 * @param {*} fns
 */
const chainAsync = fns => {

    let curr = 0

    const next = () => fns[curr++](next)

    next()

}



console.log(chainAsync([
    next => {
      console.log('0 seconds');
      setTimeout(next, 1000);
    },
    next => {
      console.log('1 second');
    }
  ]))



    


