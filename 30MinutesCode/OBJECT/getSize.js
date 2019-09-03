/**
 *  获取 array object  string的长度  
 *   利用各自的判断方法  结合三元表达式
 *
 * @param {*} val
 */
const getSize = (val)=> {
    Array.isArray(val) 
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob([val]).size
    : 0
}