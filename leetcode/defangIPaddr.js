/**
 *   IP地址无效化
 * 
 * 给你一个有效的ip地址address，返回这个ip地址的无效化版本
 *
 * @param {*} address
 * @returns
 */
const defangIPaddr = function(address) {
    
    return address.split('.').join('[.]')
}