/**
 *   对象深复制
 *
 * @param {*} obj
 * @returns
 */
const deepClone = (obj) => {
    let clone = Object.assign({},obj)  //  先浅复制一份当前对象
    Object.keys(clone).forEach((key)=> {
       clone[key] = typeof obj[key] === 'object' 
       ? deepClone(obj[key]) 
       : obj[key]
    })
    return Array.isArray(obj) && obj.length
     ? (clone.length == obj.length) && Array.from(clone)
     : Array.isArray(obj)
     ? Array.from(obj)
     : clone
}