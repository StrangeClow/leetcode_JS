
function test() {
    var n = 4399
}
function add() {
    n ++
    console.log(n);
}
// return {n: n,add: add}

// var result = test()
// var result2 = test()
// result.add()
// result.add()
// console.log(result.n);
// result2.add()


//   dp 动态规划  



let f = new Promise((resolve)=> {     // 核心问题 
    console.log(1);
    resolve(2)
    console.log(3);
})
let g = async function a() {
    console.log(4);
    // return await 5

}
f.then((v)=> {
    console.log(v);
})
a.then((v)=> {
    console.log(v);
})

console.log(6);



var a = 1

if(true) {
    console.log(a);
    let a = 2    // let声明的变量不会提升 
} 


//   函数声明 > arguments > 变量声明 

var c = 1;
function c(c) {
    console.log(c);
    var c = 3;
}
console.log(c);
c(2);


//  自执行函数会先进行变量提升 


//  变量声明可以提升 但赋值不会提升 

//  从右往左赋值  


console.log(null === null);


let a = {
    name:' vscode',
    age: 7,
    subs: {
        hobby: 'play',
        sex: 1
    }
}

console.log(Object.assign({},a));




//  改变数组本身的元素   栈 队列方法 


console.log(new Array(100).fill(1));


// 生成1-10的数据 
console.log(new Array(10).fill("").map((item,index)=>index + 1));