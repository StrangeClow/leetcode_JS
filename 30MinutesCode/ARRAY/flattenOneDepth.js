/**
 * 
 *   扁平化数组   设置解析的层次 
 * 
 *  解析一层
 *
 * @param {*} arr
 * @param {number} [depth=1]
 */

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





const flattenOneDepth3 = function(arr, n = 1) {      // n为拆开的层数  可设置值为n即展开n层

   if(!arr || !(arr instanceof Array))  return false

      return arr.reduce((prev,curr)=> {
        
          return prev.concat( Array.isArray(curr) ? flattenOneDepth3(curr) : curr)
        
       },[])

}
let n4 = [1,[2,[3,[4,5,6]]]]
let n = [1,2,3,[4,5,[6,7,[8],9],10],11] 
console.log(flattenOneDepth3(n4));

