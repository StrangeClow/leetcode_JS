/**
 *   根据条件过滤一个人对象数组 同时过滤掉未指定的key
 *
 * @param {*} data
 * @param {*} keys
 * @param {*} fn
 */
const reduceFilter = (data, keys, fn) =>
      data.filter(fn).map(el =>
        keys.reduce((acc,key)=> {
            acc[key] = el[key]
            return acc
        },{}))