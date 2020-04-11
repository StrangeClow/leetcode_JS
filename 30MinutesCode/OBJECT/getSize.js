/**
 *  获取 array object  string的长度  
 *   利用各自的判断方法  结合三元表达式   a ? b : c ? d : e
 *
 * @param {*} val
 */
const getSize = (val)=> {
  return  Array.isArray(val) 
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    // 转为字符串包装类型
    ? new Blob([val]).size
    : 0
}


console.log(getSize(12345));
console.log(getSize('hello world'));
console.log(getSize([1,2,3,4,5,6,7]));
console.log(getSize({a:1,b:2}));