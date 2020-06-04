function test() {

    new Promise((resolve) => {
        console.log('1')
            resolve()
        console.log('2')
             }).then(() => {
            console.log('3')
             })
             setTimeout(() => {
            console.log('4')
             })
             console.log('5')
}

test()


//  所有函数的参数都是按值传递的 

function test2() {

    // setTimeout(function){
    //     console.log(1);
    //     },0)
        setTimeout(function(){
            console.log(1)
        },0)
        new Promise(function execulor(resolve){
            console.log(2)
        for(var i = 0;i<10000;i+=1){
        i ==9999 && resolve()
        }
        console.log(3)
        }).then(function(){
        console.log(4)
        })
        console.log(5)
}
    
console.log('test2=====>',test2())




function f(s) {
   console.log('打印1',this.a, s)     // 此处输出两个 2 3
   return this.a + s
}
var obj = {
    a: 2
}
var f2 = function() {
    // apply改变this指向 
    return f.apply(obj, arguments)    // arguments为函数传递的参数 
}

var b = f2(3)       // 输出 5
console.log('打印2',b)




var a = 10
function t() {
    a = 100
    console.log(a)     // 100
    console.log(this.a)  // 10    // this为全局window
     var a   // 声明变量 但未赋值  相当于覆盖声明 
    console.log(a)   // 100
}
t()


// (function(){
//     var a = b =3
// })()
// console.log(b)
// console.log(b,a)   // a报错  b= 3   此处b没有声明 
// console.log(a,b)   // a报错  b= 3   此处b没有声明 




//  Function.prototype.call/call可以动态改变this
var obj1 = {
    name: 'sven',
    getName: function() {
        return this.name
    }
}

var obj2 = {
    name: 'anne'
}

console.log(obj1.getName());
console.log(obj1.getName.call(obj2));
console.log(obj1.getName.apply(obj2));



console.log(Math.max(1,2,3,7,9,4));     // math.max接受的是一串数字 
console.log(Math.max[1,2,3,7,9,4]);
console.log(Math.max.apply(null,[1,2,3,7,9,4]));
console.log(Math.max.call(null,1,2,3,7,9,4));



// 丢失的this问题 
var obj = {
    name: 'sven11',
    getName: function() {
        return this.name
    }

}

console.log(obj.getName());

var getName2  = obj.getName     // 新变量引用obj.getName 相当于普通函数调用  this指向window  所以为undefined   理解不同的func调用方式 确定不同的点 
console.log(getName2());
console.log(getName2());




var func  =function(a,b,c) {
    console.log(a,b,c, a+b+c);
}

func.apply(null,[1,2,3])    // 传入null 表示默认的宿主对象 在浏览器中则是window 
func.call(null,1,2,3)



var obj1 = {
    name:'hello',
   
}
var obj2 = {
    name: 'world'
}

window.name = 'vs code'       // 非浏览器端 没有window 
var getName = function(age) {
    console.log(this.name+age);
}

getName()
getName.call(obj1,'codeinfo')
getName.call(obj2)


// (function(){
//     Array.prototype.push.call(arguments,6)
//     console.log(arguments);
// })(1,2)



function add(a,b) {
    console.log(a,b);
   return a + b
}

function add1(c, add) {
    return add(c,15) 
}

add1('add1===>',12,add)


function func(n) {
    console.log(n);
    var n = 456
    console.log(n);
}
// var n = 123
// func()
func(n)



function p1(name, age, job) {
    this.name = name
    this.age =age
    this.job  = job
}

var p2 = new p1('hello',19,'world')
console.log(p2);

var p3 = p1('hello11',19,'world22')   // 该this在运行时绑定 所以直接调用p  this会映射到window上
console.log(p3);
console.log(window.job);



function fn() {
    console.log(n);
    n = 456    // 此后n值一斤被改了 
    console.log(n);
}

var n= 123
fn(n)
console.log(n);



var n  =123
function fn() {
    console.log(n);
}

function fn1() {
    var n = 456
    fn()
}

fn1()
console.log(n);




var length = 100
function f1() {
    console.log(this.length);
}

var obj =  {
   x : 10,
   f2: function(f1) {
        f1()
        arguments[0]()    // 等于arguments.length   两个参数 
   }
}

obj.f2(f1, 1)


function b() {
    console.log(a);
    var a = 10
    function a() {}     // 变量提升   函数优先级更高 
    a = 100
    console.log(a);
}

b()


(function(num){
    console.log(num);
    var num = 10
    function num(){}    // 函数的优先级更高   此时会输出  func ==> num
})(100)


(function(num){
  function num() {}    // num 函数的优先级最高 
  console.log(num);
  var num = 101
  console.log(num);
})(100)



function n() {
    if(2 > 1 ) {
        arr = 10
        brr = 20
        let arr
        var brr 
        console.log(arr);
        console.log(brr);
    }
}

n()


var r = (function() {
    var u = {
        a: 1, b:2
    }
   var R = {
       fn: function(k) {
            return u[k]
       }
   }
   return R
})()

console.log(r.fn('a'));



