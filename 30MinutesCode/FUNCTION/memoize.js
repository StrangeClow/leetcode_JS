/**
 *
 *
 * @param {*} fn
 * @returns
 */
const memoize = function(fn) {
    
    // new一个map实例
    const cache = new Map()
    
    const cahed = function(val) {
        
        // map.set()    map.get()
        // fn.call(this, arguments)
        return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val)
    }

    cahed.cache = cache

    return cahed

}