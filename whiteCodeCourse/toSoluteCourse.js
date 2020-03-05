/***   
 *    经典闭包问题
 *      
 *     1. 出现原因 因为setTimoeout延迟函数 循环结束之后才走console.log
 *    
 *     2.  解决方案   A. var替换为let 拥有块级作用域
 *                   B. 匿名自执行包裹异步操作 加一层闭包 
 *                   C， 用一个临时变量替换
 * 
 *       
 *     
 *    原因： 由于作用域链的机制，闭包只能取得内部函数的最后一个值，这样的结果是
 *    如果内部函数在一个循环中，那么变量的值始终未最后一个值。
 * 
 * 
 */

 var data = []
     for (var index = 0; index < 3; index++) {
         data[i] = function() {
             console.log(i);
         }
     }


 // 改进
 
  for (var index = 0; index < 3; index++) {
     data[i] = (function(num){
        return function() {
            console.log(num);
        }
     })(i)
  }