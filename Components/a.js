var c = [12,34,7,89,90].reduce(function(a,b) {
    console.table(a,b);
return a + b;
})
console.log(c);



const d = [[1,5],[2,8,9]].reduce((f,g)=> {
    return f.concat(g);
})
console.log(d);