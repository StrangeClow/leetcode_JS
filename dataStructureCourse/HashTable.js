
// 哈希表(也叫散列表)

/**
 *  哈希表： 又称为散列表 是根据键(Key)而直接访问在内存存储位置的数据结构，
 *  也就是它通过一个关于键值的函数，将所需查询的函数映射到表中一个位置来采访记录
 * 
 * 哈希函数：即散列函数，是hash表的映射函数，可以把任意长度的输入变换为固定长度的输出，该输出即为hash值。
 * 
 * 
 * 
 * 
 *
 */
var HashTable = function() {
  var items = []

  // 创建散列函数 
  var loseloseHashCode = function(key) {
    var hash  = 0
    for (let index = 0; index < key.length; index++) {

        // 获取当前键的ASCII值 并累加
        hash+= key[index].charCodeAt()
    }
     // 规定是这样的 
    return hash % 37  // 
  }


  // hash表添加元素

  this.put = function(key, value) {

     var position = loseloseHashCode(key)
     
     //  取值 
     items[position] = value
  }

  // hash删除元素 
  this.remove = function(key) {
      items[loseloseHashCode[key]]  =undefined
  }

}






//  思考   hash表冲突解决方案 

            //  1. 开链法