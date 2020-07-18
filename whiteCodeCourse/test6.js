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