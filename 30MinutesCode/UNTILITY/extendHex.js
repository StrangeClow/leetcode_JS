/**
 *  将三位数的颜色代码转为6位
 *   
 *   input ===> #03f
 *   output ===> 05a
 *
 * @param {*} shortHex
 * @returns
 */
const extendHex = function(shortHex) {

    // 添加前缀#
  let transHex = '#' + shortHex.slice(shortHex.startsWish('#') ? 1 : 0)
  // 转数组
  let tempArr = transHex.split('')
  return tempArr.map((item,index)=> {
      // 相当于复制当前item元素
      item + item
  }).join('')
}