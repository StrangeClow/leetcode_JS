/**
 *   用栈实现队列
 *     结合两种数据的区别  并结合现的方法去实现
 *
 */
var myQueue = function() {
    this.array = []
    this.start = 0;
    this.end = 0
}



myQueue.prototype.push = function(item) {
     this.array[this.end++] = item
}

myQueue.prototype.pop = function() {
    return this.array[this.start++]
}

myQueue.prototype.peek = function() {
    return this.array[this.start]
}


myQueue.prototype.empty = function() {
    return this.start === this.end
}