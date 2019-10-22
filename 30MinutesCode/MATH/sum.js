/**
 *  简单数组求和   利用数组的剩余参数和高阶reduce计算  
 *
 * @param {*} arr
 */
const sum = (...arr) =>{
    console.log('arr===>',...arr);
    return [...arr].reduce((acc,val) => acc+ val, 0)
} 