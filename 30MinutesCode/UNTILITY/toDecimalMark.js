/**
 *   将数字转化为千分位的格式     num.toLocaleString('en-US)
 *
 * @param {*} num
 */
const toDecimalMark = num => num.toLocaleString('en-US')      // 给定api


console.log(toDecimalMark(1232356.07));   // output=> 1,232,356.07





const toDecimalMark2 = function(num,point = 2) {    // 正则匹配   来自于博客园
    // 若给定num为整数 则直接输出  否则固定输出小数点后的几位数 
    // 类整型   类浮点型 
    let [sInt, sFloat] = (Number.isInteger(num) ? `${num}` : num.toFixed(point)).split('.');
    
    // 正则匹配整型部分
    sInt = sInt.replace(/\d(?=(\d{3})+$)/g, '$&,');
    // 拼接数值
    return sFloat ? `${sInt}.${sFloat}` : `${sInt}`;
}

console.log(toDecimalMark2(1232356.0798));   // output=> 1,232,356.08   // 四舍五入