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





async function async1() {
    console.log('async1 start');     // 2
    await async2();
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
}).then(function() {
    console.log('promise2');  // 7
});
console.log('script end');    // 5
