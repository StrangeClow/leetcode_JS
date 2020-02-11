
// 哈希表 
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