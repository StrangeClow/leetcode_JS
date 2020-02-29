/**
 *  defer延迟调用一个函数  
 * 
 *      使用settimeout,超过时间为1秒，将新事件添加到浏览器事件队列中，
 * 
 * 使用(...)展开运算符为函数提供任意数量的参数 
 *
 * @param {*} fn
 * @param {*} args
 * @returns
 */
const defer = (fn, ...args) => {

    return setTimeout(fn, 1, ...args)
    
}



// test 

function A() {
    console.log('AA');
}

function B() {
    console.log('BB');
}

defer(A(),B())

// output===>  BB, AA