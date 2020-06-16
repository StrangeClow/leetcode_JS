/**
 * 
 *   扁平化数组   设置解析的层次 
 * 
 *  解析一层
 *
 * @param {*} arr
 * @param {number} [depth=1]
 */
const flattenOneDepth = (arr, depth =1) => {
    return  arr.reduce((a,v)=>{
        a.concat(depth > 1 && Array.isArray(v) ? flattenOneDepth(v, depth -1): v)
     },[])
}


let n1 = [1,[2,[3,45,6]]]

console.log(flattenOneDepth(n1,2));


const flattenOneDepth2 = function(arr, depth = 1) {
    // 循环子项
    return arr.reduce((prev, curr)=> {
        // 1. 验证reduce子项的初始值是否为数组 是数组递归调用自身 抛入参数 深度减1
        // 2. 拼接concat()数据
        return prev.concat(depth > 1 && Array.isArray(curr) ? flattenOneDepth2(curr, depth - 1) : curr)
    },[])
}

let n2 = [1,[2,[3,[4,5,6]]]]
console.log(flattenOneDepth2(n2,2));