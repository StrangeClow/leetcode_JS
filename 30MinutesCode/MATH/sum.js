/**
 *  简单数组求和   利用数组的剩余参数和高阶reduce计算  
 *
 * @param {*} arr
 */
const sum = (...arr) =>{
    console.log('arr===>',...arr);
    return [...arr].reduce((acc,val) => acc+ val, 0)
} 


console.log(sum(1,2,3,4,5,6));


const sum2 = function(...arr) {
    console.log('...arr',...arr);
    let res=  0
    for(let i = 0; i < arr.length; i++) {
       
    }
}

console.log(sum2(1,2,3,4,5,6));