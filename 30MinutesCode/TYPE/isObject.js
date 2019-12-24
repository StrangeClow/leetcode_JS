/**
 *  判断是否为对象
 *   如果传递的值是一个对象，则返回布尔值
 * 
 *     利用Object构造函数为给定值创建对象包装
 *
 * @param {*} val
 */

const isObject = obj > obj === Object(obj)