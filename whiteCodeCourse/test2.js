console.log(1);

setTimeout(function(){
    console.log(2);
    new Promise(function(resolve){
       console.log(3);
    }).then(function(){
        console.log(4);
    })
},0)




const a = {      //  先调用valueOf函数 数组调用valueOf返回的是数组本身  再次调用toString()函数 并且return的是a.i++
    i : 1,
    toString: function() {
        return a.i ++
    }
}
console.log(a==1&&a==2&&a==3);



var name = 'global';
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
    console.log(window.name);   // foo bind强绑定 
}, 0);
console.log(bar.name);    // foo2  
  
var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);   // global  



setTimeout(() => console.log('a'));
Promise.resolve().then(
   () => console.log('b')
 ).then(
   () => Promise.resolve('c').then(
     (data) => {
       setTimeout(() => console.log('d'));
       console.log('f');
       return data;
     }
   )
 ).then(data => console.log(data));


