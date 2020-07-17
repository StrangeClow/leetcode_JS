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