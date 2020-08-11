function test(a, b){
    //debugger 想不通就去单步调试
    console.log(b);
    return {
      test: function(c) {
        return test(c,a);
      }
    }
  }
  
  var a = test(100);a.test(101);a.test(102);
//   var b = test(200).test(201).test(202);
//   var c = test(300).test(301);c.test(302);
 


var User = {      // this的调用方式不同  作为方法调用  普通函数调用  call apply调用  构造函数调用   this为运行时绑定
  count: 1,
  action: {
    getCount: function() {    //  此时getCount作为函数调用 指向全局window 
     
      return this.count
    }
  }
}
var getCount = User.action.getCount   // this指向改变了 
setTimeout(()=> {
  console.log('result 1',User.action.getCount());
 
})
console.log('result 2',getCount());




// 函数是一个单独的值 可以在不同的环境中执行