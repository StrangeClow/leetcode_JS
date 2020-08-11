var obj = {
    countq: 1,
    foo: function () {
        console.log(this);
       return this.count
    }
  };
  
  var foo = obj.foo;
  
  // 写法一
  console.log( obj.foo());
  // 写法二
  console.log(foo());