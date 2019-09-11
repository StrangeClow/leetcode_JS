/**
 *  禁止修改当前对象
 *
 * @param {*} obj
 */
const deepFreeze = obj =>
    // 循环对象的属性值
  Object.keys(obj).forEach(prop =>
    // instanceof  判断类型
    !(obj[prop] instanceof Object) 
       // 是否冻结
    || Object.isFrozen(obj[prop]) 
    ? null : deepFreeze(obj[prop])
  ) || Object.freeze(obj);