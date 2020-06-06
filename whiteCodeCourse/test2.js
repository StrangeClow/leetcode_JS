console.log(1);

setTimeout(function(){
    console.log(2);
    new Promise(function(resolve){
       console.log(3);
    }).then(function(){
        console.log(4);
    })
},0)




const a = {      //  先调用valueOf函数 数组调用valueOf返回的是数组本身  再次调用toString()函数 并且return的是a.i++
    i : 1,
    toString: function() {
        return a.i ++
    }
}
console.log(a==1&&a==2&&a==3);



var name = 'global';
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
    console.log(window.name);   // foo bind强绑定 
}, 0);
console.log(bar.name);    // foo2  
  
var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);   // global  



setTimeout(() => console.log('a'));
Promise.resolve().then(
   () => console.log('b')
 ).then(
   () => Promise.resolve('c').then(
     (data) => {
       setTimeout(() => console.log('d'));
       console.log('f');
       return data;
     }
   )
 ).then(data => console.log(data));    // resolve的c值



 const foo = {
  bar: 10,
  fn: function() {
     console.log('1212==',this)
     console.log('1212==',this.bar)
  }
}

var fn1 = foo.fn    // fn函数作为foo对象的方法存在 但是赋值给fn1后 fn1执行的任然是全局的window环境 
fn1()



const foo = {
  bar: 10,
  fn: function() {
     console.log(this)
     console.log(this.bar)
  }
}
foo.fn()


// var text = '哈哈哈哈哈'

const o1 = {
  text: 'o1',
  fn: function() {
      return this.text
  }
}

const o2 = {
  text: 'o2',
  fn: o1.fn,   // 变种 
  // fn: function() {
  //     return o1.fn()   // this指向最后调用它的对象  
  // }
}

const o3 = {
  text: 'o3',
  fn: function() {
      var fn = o1.fn    // 此处this指向window   所以任然输出undefined 
      return fn()
  }
}


console.log(o1.fn())     // 作为对象的方法调用   直接输出  
console.log(o2.fn())
console.log(o3.fn())




const foo = {
  name: 'lucas',
  logName: function() {
      console.log(this.name)
  }
}

const bar = {
  name: 'mike'
}

console.log(foo.logName());   // 作为对象的方法调用 
console.log(foo.logName.call(bar))    // call改版指向


//  结论：如果构造函数中显式返回一个值，且返回的是一个对象，那么 this 就指向这个返回的对象；
//     如果返回的不是一个对象，那么 this 仍然指向实例。


//   不同的函数作用域  
function bar(){
  var b = 'bar'
  function foo() {
    console.log(b);     // 变量作用域的查找是一个扩散过程 
  }
  foo()   //  函数提升 
}

bar()



// 预编译阶段 变量bar进行声明 但不赋值  函数bar则进行创建并提升   代码执行时 变量bar才进行赋值 

function foo1() {
  foo2()
 }
 function foo2() {
  foo3()
 }
 function foo3() {
  foo4()
 }
 function foo4() {
  console.log('foo4')
 }
 foo1()    // 理解函数的调用栈   新进后出  


 //  结论　当使用 + 运算符计算 string 和其他类型相加时，都会转换为 string 类型；其他情况，都会转换为 number 类型，但是 undefined 会转换为 NaN，相加结果也是 NaN




 console.log({}+true);






 console.log('start here')

new Promise((resolve, reject) => {
 console.log('first promise constructor')
 resolve()
})
 .then(() => {
   console.log('first promise then')
   return new Promise((resolve, reject) => {
     console.log('second promise')
     resolve()
   })
     .then(() => {
       console.log('second promise then')
     })
 })
 .then(() => {
   console.log('another first promise then')
 })

console.log('end here')




//  事件执行机制 
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)  

async1()

new Promise(function(resolve) {
  console.log('promise1')
  resolve()
}).then(function() {
  console.log('promise2')
})

console.log('script end')





var k = 0;
for(var i=0,j=0;i<10,j<6;i++,j++){
    k += i + j;
}
console.log(k)