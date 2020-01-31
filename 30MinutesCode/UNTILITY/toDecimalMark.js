/**
 *   将数字转化为千分位的格式 
 *
 * @param {*} num
 */
const toDecimalMark = num => num.toLocaleString('en-US')


console.log(toDecimalMark(1232356.07));   // output=> 1,232,356.07