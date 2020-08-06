// start
setTimeout(function(){
  console.log('timeout1');
});

new Promise(function(resolve){
   console.log('promise1')
   for(var i = 0; i < 1000; i++) {
        i == 99 && resolve()
   }
   console.log('promise2');
}).then(function(){
   console.log('then1');
})

console.log('global1')

//输出顺序为  promise1===> promise2===> global1====> then1====>  timeout1

// end


function fun1() {
   console.log('1');
   setTimeout(()=> {
      console.log('5');
    },0)
}

function fun2() {
   setTimeout(()=> {
     console.log('4');
   },0)
   console.log('2');
   fun1()
   console.log('3');
}

fun2()





var p = new Promise((resolve)=> {
    console.log(4);
    resolve(5)
})

function fun1() {
   console.log(1);
}

function fun2() {
   setTimeout(()=> {
      console.log(2);
   },0)
   fun1()   
   console.log(3);
   p.then((resolved)=> {
      console.log(resolved);
   }).then(()=> {
      console.log(6);
   })
}

fun2()   //  4 1 3 5 6 2 







//   事件循环打印顺序  
async function a1 () {
   console.log('a1 start')
   await a2()
   console.log('a1 end')
}
async function a2 () {
   console.log('a2')
}

console.log('script start')

setTimeout(() => {
   console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
   console.log('promise1')
})

a1()

let promise2 = new Promise((resolve) => {
   resolve('promise2.then')
   console.log('promise2')
})

promise2.then((res) => {
   console.log(res)
   Promise.resolve().then(() => {
       console.log('promise3')
   })
})
console.log('script end')








function a() {
   let n= 10
   if(true) {
     let n = 100
   }
   console.log(n)
   
 }
 console.log('打印n',a())    // 10
 
 
 
 
 var n1 = 123
 function f1() {
   console.log('f1====>',n1)
 }
 function f2() {
   var n = 456
   // 里面读不到值  声明提升 赋值未提升 
   // f1()
 }
 
 //  console.log('执行f2====>',f2())
 f2()
 console.log(n1)
 
 
 
 
 var length = 100
 function f3() {
   console.log(this.length)  // 100
 }
 
 var obj = {
   x: 10,
   f4: function(f3) {
      f3()
      arguments[0]()  //  arguments[0] = f1  f1有两个参数  所以length = 2
   }
 }
 
 // 当前obj对象调用f4()
 obj.f4(f3, 1)    // 输出 100  2