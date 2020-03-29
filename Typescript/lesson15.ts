/**
 *    泛型  
 * 
 *    泛型是指在定义函数 接口 类的时候 不预先指定具体的类型， 而在使用的时候在指定具体的类型 
 *
 * @template T
 * @param {number} length
 * @param {T} value
 * @returns {Array<T>}
 */
function createArray<T>(length: number, value: T): Array<T> {
  let result : T[] = [];
  for(let i = 0; i < length; i ++) {
    result[i] = value
  }
  return result
}

createArray<string>(3,'x')