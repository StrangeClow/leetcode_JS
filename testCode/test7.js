var val= 12
function fun1() {
    // val此时读取不到值  变量声明提升  但赋值未提升
    console.log(val);
    var val = 20
    console.log(val);
}
fun1()


//   事件循环的例子
function foo() {
	console.log('foo')
}
async function async1() {
	console.log('async1 start')
	await async2()
	console.log('async1 end')
}
async function async2() {
	console.log('async2')
}
console.log('global start')
async1()
foo()
console.log('global end')
//   输出  global start  async1 start  async2  foo   global end   async1 end




// 前端事件循环   async await then resolve为微任务 先执行  定时器 事件绑定为宏任务 后执行 
// 从全局代码开始执行 遇到函数调用则入栈(被压入的函数叫帧) 当函数返回后 则从调用栈弹出 当存在定时器时，定时器里面的
// 回调函数会入队到消息队列中(宏任务) 消息会在调用栈清空的时候执行 微任务在调用栈清空后立即执行 并且期间新加入的微任务也会一同执行 
async function async1() {
    console.log('async1 start');     // 2
    await async2();     // 微任务任务1
    console.log('async1 end');   // 6
}
async function async2() {
	console.log('async2');  // 3
}
console.log('script start');   // 1
setTimeout(function() {
    console.log('setTimeout');   // 8
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');    // 4
    resolve();
}).then(function() {    // 微任务2
    console.log('promise2');  // 7
});
console.log('script end');    // 5



function getSum() {
    return Array.prototype.slice.call(arguments)
}

console.log(getSum(1,2,3,4,5));




for(i = 0, j = 0; i < 10, j < 6; i++,j++) {
    console.log('j,i===>',j,i);
   k = j + i
   console.log('k==>',k);
}
console.log(k);



var a = 10, b =20, c = 30
++a
a++
e=++a+(b++)+(c++)+a++
console.log(e);


console.log('5' + 3);
console.log('5' - 3);

console.log(null === undefined);
console.log(null == undefined);



for(let i = 0; i <= 3; i++) {
    console.log(i);
    // let i = 'abc'
    console.log(i);
}