/**
 *  队列   
 * 
 *     先进先出的数据结构   
 *
 */
var Queue = function() {

    // 初始化数据
    var items = []
    
    // 添加元素 末尾
    this.enqueue = function(element) {
       items.push(element)
    }

    // 删除元素 开头
    this.dequeue = function() {
        return items.shift()
    }

    // 查看队列头
    this.front = function() {
        return items[0]
    }

    // 查看队列的长度
    this.length = function() {
        return items.length
    }
}




var initQueue = new Queue()




//   利用队列来思考击鼓传花的问题   
/**
 *
 *
 * @param {*} wanjia   玩家列表
 * @param {*} rule  淘汰规则
 */

 var wanjia = ['a','b','c','d','e','f']
 var rule = 3  // 当花传递到第三名时，第三号淘汰 

var chuanhua  = function(wanjia, rule) {
   
    // 初始化
   var chuanhua1 = new Queue()

   for (let index = 0; index < wanjia.length; index++) {
      
    chuanhua1.enqueue(wanjia[i])
       
   }

   // 淘汰 
   var taotai
   while(chuanhua1.size() > 1) {
      for (let index = 0; index < rule - 1; index++) {
          
          chuanhua1.enqueue(chuanhua.dequeue)  // 把删除的放到末尾
      }
      
      taotai = chuanhua1.dequeue()
   }
   return chuanhua1.dequeue()    // 剩下的玩家   
}