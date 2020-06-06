/**
 *    利用hash表来计算  
 *
 * @param {*} capacity
 */
class LRUCache{
    
    /**
     *Creates an instance of LRUCache.
     * @param {*} capacity
     * @memberof LRUCache
     */
    constructor(capacity) {
         
        this.capacity = capacity

        this.cache  = new Map()
    }

     /**
      *
      *
      * @param {*} key
      * @memberof LRUCache
      */
     get(key) {
       // 当前缓存中不存在 指定key的   
       if(!this.cache.has(key)) {
            return -1
       }
     }


     /**
      *
      *
      * @param {*} key
      * @param {*} value
      * @memberof LRUCache
      */
     set(key, value) {

     }
}

