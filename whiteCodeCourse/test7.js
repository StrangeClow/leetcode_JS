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


//   转化数据结构 
var data = [
    {"parent_id": 0, "id":1, "value": "xxx"},
    {"parent_id": 1, "id":3, "value": "xxx"},
    {"parent_id": 4, "id":6, "value": "xxx"},
    {"parent_id": 3, "id":5, "value": "xxx"},
    {"parent_id": 2, "id":4, "value": "xxx"},
    {"parent_id": 1, "id":2, "value": "xxx"},
]
function toTree(data) {
    // 删除所有children,防止多长调用
    data.forEach(item => {
        delete item.children;
    })
    // 将数据存储为 以id为key的map索引数据列
    const map = {};
    data.forEach(item => {
        map[item.id] = item;
    })
    const list = [];
    data.forEach(item => {
        // 以当前遍历项，的pid,去map对象中找到索引的id
        let parent = map[item.parent_id];
        // 如果找到索引,那么说明此项不在定级当中，那么需要把此项添加到，他对应的父级中
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 list结果集中，作为顶级
            list.push(item)
        }
    })
    return list;
}
console.log(toTree(data))


let n9 = 1234567.09
function transN(n) {
    return n.toLocaleString('en-US')
}
console.log(transN(n9));



function getSum() {
    return Array.prototype.slice.call(arguments)
}

console.log(getSum(1,2,3,4,5));