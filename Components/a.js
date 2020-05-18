var c = [12,34,7,89,90].reduce(function(a,b) {
    console.table(a,b);
    return a + b;
    })
console.log('c==',c);



const d = [[1,5],[2,8,9]].reduce((f,g)=> {
    console.log('f==',f, 'g==',g);
    // 数组拼接 
    return f.concat(g);
})
console.log('d==',d);



const PushArr = function(arr) {
    return arr.reduce((item, prev)=> {
        console.log(item,prev);
    })
}


console.log([1,2,3].concat[4,5]);

let s1 = [1,2,3]
let s2 = [4,5,6]
console.log(s1.concat(s2));