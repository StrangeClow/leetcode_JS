 a()
function a() {
    console.log('object');
}

// b()
// var b = function() {   // 函数表达式不会被提升  类型错误    函数优先于变量提升  
//     console.log('b');
// }


var aa =  {
    a: 14,
    name:'hello',
    getFullName: function() {
        console.log(this.name);
    },
    age: undefined
}


console.log(Object.assign({},aa));


for (const key in aa) {
    if (aa.hasOwnProperty(key)) {
        const element = aa[key];
        console.log(element);
    }
}



// 让 Button“继承”Widget 
Button.prototype = Object.create( Widget.prototype ); 