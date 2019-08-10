/**
 *  对象转键值对
 * 
 * eg: objectToPairs({a:1,b:2}); output [['a',1],['b',2]]
 *
 * @param {*} obj
 */
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]])