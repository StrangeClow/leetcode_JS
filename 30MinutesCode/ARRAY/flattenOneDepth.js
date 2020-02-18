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
    arr.reduce((a,v)=>{
        a.concat(depth > 1 && Array.isArray(v) ? flattenOneDepth(v, depth -1): v)
    },[])
}