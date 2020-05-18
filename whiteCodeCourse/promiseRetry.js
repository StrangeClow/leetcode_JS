/**
 *
 *
 * @param {*} options
 * @param {*} times
 */
const promiseRetry = function(options, times) {      // 简化版的promise重试   来自stackoverflow 
    console.log('options, times====>',options, times);
    fetch(...options).then(resolve)
    .catch(err => {
        if(times - 1 > 0) {
            // 递归当前函数 并递减下标 
            promiseRetry(options, times - 1)
        }
        return promiseRetry(err)
    })
}