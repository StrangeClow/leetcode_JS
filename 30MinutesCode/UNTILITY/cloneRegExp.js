/**
 *  复制一个正则 
 *
 * @param {*} reg
 * @returns
 */
const cloneRegExp = function(reg) {
    return new RegExp(reg.source, reg.flags)
}