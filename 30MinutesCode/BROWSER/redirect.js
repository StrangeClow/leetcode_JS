/**
 *  重定向到新的url
 *    主要是利用window.location.href或window.location.replace  三元表达式判断匹配
 *
 * @param {*} url
 * @param {boolean} [asLink=true]
 * @returns
 */
const redirect = (url, asLink = true) => {
    return asLink ? (window.location.href = url) 
            : window.location.replace(url)
}