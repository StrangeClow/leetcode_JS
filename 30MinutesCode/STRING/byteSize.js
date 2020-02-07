/**
 *  返回字符串的长度
 *    将字符串包装为 blob类型   然后取size
 *
 * @param {*} str
 */
const byteSize = str => new Blob([str]).size