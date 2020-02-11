// 创建集合相关

var SetFunc = function() {
    // 创建一个集合
    var items = {}

    // 检查元素是否存在  返回一个布尔值 
    this.has = function(value) {
      return items.hasOwnproperty(value)
    }

    // 添加元素 （集合是不重复的元素组合）
    this.add = function(value) {
        if(!this.has(value)) {
             items[value] = value
             return value
        }
        else {
            false
        }
    }

    // 删除元素
    this.remove = function(value) {
        if(this.has(value)) {
           delete items[value]
           return true
        }
        else false
    }

    
    // 获取集合元素 
    this.getItems = function() {
        return items
    }

}