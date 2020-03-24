/**
 *   rgb值转换为简单的颜色代码 
 * 
 *      1. <<   按位左移运算符 
 *      2. toString(16)将给定的RGB(255,123,90)转换为16进制字符串
 *      3. 使用string.padStart(6,'0')得到六位的16进制值  (其中包含ABCDEF)
 *
 * @param {*} r
 * @param {*} g
 * @param {*} b
 */
const RGBToHex = (r, g, b) =>
    ((r << 16) + (g << 8) + b)
    .toString(16)
    .padStart(6,'0')