/**
 *   栈   先进后出  （竖向）
 * 
 *    思考题：  1. 函数调用栈(核心 理解函数的打印顺序) A（B（C（D（））））  函数D执行完之后，会弹出栈被释放，弹出栈的顺序为D->C->B->A;
 *             2. 括号匹配
 * 
 *             3. 浏览器的前进与后退
 *
 */
  
  // 封装栈类
 function Stack(){
   
    this.items = []
    
    // 压栈操作 
    Stack.prototype.push = function(element) {
          // 借用数组的方法
          this.items.push(element)
    }

    // 出栈操作
    Stack.prototype.pop = function() {
        // arr.pop() 移除栈顶元素并返回
        return this.items.pop()
    }
 }