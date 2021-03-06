/**
 *   一层压平数组
 *       
 *      concat()  
 * 
 * @param {*} arr
 * @returns
 */
const deepInOneth = function(arr) {
    // 若数组为空
    if(arr.length === 0) {
         return []
    }
    // 默认取数组第一项为头
    const head = arr[0]
    // 验证数据类型 arr第一项是否为数组格式  
    if(head instanceof Array) {    
       arr[0] = deepInOneth[head]
    } else {
        arr[0] = [arr[0]]
    }
    // arr.concat()  数组拼接  
    // arr.slice(1)  删除arr的第一位元素 并返回剩余元素
    return arr[0].concat(deepInOneth(arr.slice(1)))
}

let n = [1,2,3,[4]]
console.log(deepInOneth(n));



let n1 = [1,2,3,4]
console.log(n1.slice(1));
console.log(n1);