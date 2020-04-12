/**
 *  返回满足测试函数的第一个键
 *
 * @param {*} obj
 * @param {*} fn
 */
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key],key,obj))


let obj = {
  name: 'vs code',
  age: 18,
  getAge(age) {
      return `age ${age}`
  }
}

console.log(findKey(obj,(age)=> age > 17));