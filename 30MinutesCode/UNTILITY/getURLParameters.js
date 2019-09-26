/**
 *   返回url参数的对象
 *
 * @param {*} url   url参数
 */
const getURLParameters = url => 
  url .match(/([^?=&]+)(=[^&]*)/)    // 正则表达式匹配
  .reduce((a,v)=>
  ((a[v.slice(0,v.indexOf('='))] = v.slice(v.indexOf("=")+1)),a),{})