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

console.log(typeof typeof 42);

// 让 Button“继承”Widget 
Button.prototype = Object.create( Widget.prototype ); 



//  显式强制类型转换为布尔值最常用的方式是 ！！ 第二个！会将结果反转回原值

var a =  '0'
console.log(!a);
console.log(!!a);