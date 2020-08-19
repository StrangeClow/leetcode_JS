/**
 *   用栈实现队列
 *     结合两种数据的区别  并结合现的方法去实现
 *     
 *     prototype
 */
var myQueue = function() {
    this.array = []
    this.start = 0
    this.end = 0
}


// push 将一个元素放入队列的尾部
myQueue.prototype.push = function(item) {
     this.array[this.end++] = item
}

// pop 移除队列的第一个元素
myQueue.prototype.pop = function() {
    return this.array[this.start++]
}

// peek 返回队列首部的元素
myQueue.prototype.peek = function() {
    return this.array[this.start]
}

// empty 队列是否为空 
myQueue.prototype.empty = function() {
    return this.start === this.end
}



let tempQuene = new myQueue() 
console.log(tempQuene);