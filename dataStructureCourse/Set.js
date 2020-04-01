// 创建集合相关

/**
 *    add() 添加某个值 返回set结构本身
 *    delete()  删除某个值 返回一个布尔值 表示是否删除成功
 *    has()  返回一个布尔值 表情该值是否为Set的成员
 *    clear() 清空set结合的所有值 
 *
 */
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