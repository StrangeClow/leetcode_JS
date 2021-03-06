var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this.foo);  
        console.log(self.foo);  
        (function() {
            console.log(this.foo);     //  当前this指向window  所以为undefined
            console.log(self.foo);  
        }());
    }
};
myObject.func();


let n = [1,3,6,9,4]
console.log(n.slice(1));
console.log(n);




function t(arr) {
    return [].shift.call(arr)
}

let n1 = [1,3,6,9,36]
console.log(t(n1));   // 输出 1





var num = 25;
function foo(){
//    var num =10
 console.log(this.num);
}
foo();//25   // 浏览器端输出25  node环境下undefined 
 
(function bar(){
 this.num = 13;
 foo();   // 13
})();
console.log(num);//13
(function bar1(foo){
 this.num = 23;
 foo();
})(foo)//23



if(!("a" in window)){
    var a = 1; }
  
 console.log('a===>',a) 

console.log('2'+3+4);

console.log(0xff ^ 33);

function test(a){
    a=a+10;
    }
    var a=10;
    test(a);
    console.log(a,this.a,window.a);



console.log([] == true);

console.log([2,3,3,1].concat([1,2]));


console.log('hello' instanceof String);
let a1 = 'hello'
console.log(a1 instanceof String);



var aa = new Array(5).toString()
console.log(aa);


console.log(new Array(3));


var a2 = 0
function b() {
    a2++
    this.a2 = a2
    return b
}

var test = new new b  // new b后 将new b的结果再new 
console.log(test.a2);
    

if(false){
    var a = 1;
    let b = 2;
}
console.log(typeof a);
console.log(a);   // var a为全局
console.log(b);

var a = 1;
if(true){
    console.log(a);
    // let a = 2;
}


let ar = [1,23,4,5,6,7,1,2,45,98,0,5,23,23,7,45,98]

Array.prototype.unique = function(ar) {
    let res=  []
    
    ar.map((item,index)=> {
      
        if(!res.includes(item)) {
           
           res.push(item)
        }
    })
    return res
}

console.log(ar.unique(ar));



let ar1 = [12,34,33,56,67,12,34]

Array.prototype.getUnique = function(ar1) {  // 访问对象属性  obj[prop]
    let obj = {}
    let tempArr = []

    for(let i = 0; i < ar1.length; i ++) {  
      if(!obj[ar1[i]]) {    // 对象的属性是否存在  若无当前属性 则存入 
           obj[ar1[i]] = 1
           tempArr.push(ar1[i])
      }
    }
    return tempArr
}
console.log(ar1.getUnique(ar1));



var msg='hello'; 
for (var i=0; i<10; i++)
 { 
   var msg='hello'+i*2+i; 
 }
 console.log(msg);

 var arr=[{a:1},{}];
arr.forEach(function(item,idx){
    item.b=idx; // idx 等于索引

});
console.log(arr);


function *IdGenerator(){ 　
    　let id = 0; 　
    　while(id <= 10){ 
        console.log('id===',id);
        yield ++id; 
    } 
} 


const promiseFunc = function(value) {
    return new Promise((resolve, reject)=> {
      if(true) {
          resolve(value)
      } else {
          reject(error)
      }
    })
}


console.log(promiseFunc('hello world'));

const aa1 = function(val) {
   return new Promise((resolve, reject)=> {
     if(val == 1) {
        resolve(val)
     } else {
         reject('出错')
     }
   }).then(()=> {
       console.log('皮皮虾');
   })
}

console.log(aa1(1));


function foo(a) {    
     console.log( a + b );     // 抛出错误 
        b = a;
 } 
 
foo( 2 );


function foo(a) {    
     var b = a * 2; 
    function bar(c) {        
         console.log( a, b, c );     
        } 
    bar( b * 3 ); } 
 
foo( 2 ); // 2, 4, 12



for(var i = 0; i < 10; i ++) {
  console.log(i);
}


setTimeout(function() {
    
for(var i = 0; i < 10; i ++) {
    console.log(i);
  }
},1000)


for(var i  = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}

for(let i  = 0; i < 10; i++) {    // 相当于重新绑定道循环的每一个迭代中 
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}


for(var i = 0 ; i < 5; i++) {
    (function(){
        var j  = i    // 闭包的块级作用域 
        setTimeout(() => {
            console.log(j);
        }, j*1000);
    })()
}

for(var i = 0 ; i < 5; i++) {
    (function(j){
        setTimeout(() => {
            console.log(j);
        }, j*1000);
    })(i)
}


var a = 10
function a () {

}
console.log(typeof a);      // 函数提升优先级高于变量提升  此题中变量覆盖函数声明   a显示undefined 然后是函数体   然后才是赋值 a = 10




console.log(output(typeof (function() {output('Hello World!')})()));   // 先执行匿名函数 输出hello world 执行完毕后 无返回值 则输出undefined



