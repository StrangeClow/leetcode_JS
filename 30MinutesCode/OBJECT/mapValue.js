/**
 *    使用提供的对象相同的键创建一个对象 对应值是通过函数迭代生成的
 * 
 *   reduce
 * 
 *   object.keys()
 *
 * @param {*} obj
 * @param {*} fn
 */
const mapValues = (obj, fn) =>
  // Object.keys()  
  // reducce 
  Object.keys(obj).reduce((acc,k) =>{
      accc[k] = fn(obj[fn],k,obj);
      return acc;
  }  
  ) 