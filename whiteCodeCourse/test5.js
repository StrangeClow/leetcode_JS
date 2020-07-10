
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
