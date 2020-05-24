/**
 *   字符串轮转
 *    给定两个字符串s1,s2 请编写代码检查s2是否为s1旋转而成
 *
 * @param {*} s1
 * @param {*} s2
 * @returns
 */
const stringRotation = function(s1, s2) {
  
    if(s1.length !== s2.length)  return false

    // 循环比较  
    while(true) {

    }

}




const stringRotation2 = function(s1, s2) {
   

    if(s1.length === s2.length) {
     //   
     console.log(s1.repeat(2));
     // s2是否存在于s1中
    return s1.repeat(2).includes(s2)    // 复制一次再比较 
    } else  {
        return false
    }
}


console.log(stringRotation2('ab','ba'));
console.log(stringRotation2('waterbottle','erbottlewat'));
console.log(stringRotation2('abcd','dcba'));



let a = [1,2,3,4]
console.log(undefined);
console.log(toString(undefined));
console.log(!undefined);   // 会调用toString()  // true
console.log(!!undefined);     // false  实际上等于Boolean()
console.log(Boolean(undefined));
console.log('[]====>',[] == true);


// 涉及加法运算符的运算中，对象转换为原始值(先toString()后valueOf()), 只要有一个操作数是字符串，另一个操作数也会转为字符串
console.log(1+ {});   // 1[object, object]


foo()   // 函数名和函数体都提升
function foo() {
    console.log('object');
}


test1()
function test1() {
    console.log('同名tes1');
}
function test1() {
    console.log('同名test2');
}
delete test1
console.log(test1());


//  javascript函数调用的四种方式 

// 1. 普通函数调用
function d1() {
    console.log('普通函数调用',this);
}
console.log(d1());


// 2. 作为对象的方法调用
let q = {
    name: '作为对象的方法调用',
    getName: function(x) {
      console.log('第二种方式，作为对象的方法调用',this);
    }
}

console.log(q.getName());

// 3. 构造函数模式调用  
 function add1(x,y) {
     console.log('构造函数模式调用',this,x,y);
     console.log(x+y);
     this.a = 1
 }
console.log(add1(4,8));
 let add1Func = new add1(2,7)
 console.log(add1Func.a);


 // 4. 借用call apply的方式调用  显式指定调用所需要的this值，任何函数都可以作为任何对象的方法调用    借用思想  
 function add2(x, y) {
    return x * y
 }

 let w = {
     name: 'jsjsj',
     getNum: function() {
        
     }
 }

 console.log(add2.call(w,2,3));   // 以对象w的方式来调用add2()方法
 console.log(add2.apply(w,[2,9]));




 function sum(a, b) {
   return a + b
 }

 function callSum(a, b) {   
    return sum.apply(this, arguments)   // 借用  方法.apply(要代替添加的对象，参数)
 }

 console.log('改变指向===>',callSum(12,57));



 let e = [1,2,6,965,0,466,347,3,56767]
 console.log('拿最大值===>',Math.max.apply(this,e));
 console.log('拿最xiao值===>',Math.min.apply(null,e));
 console.log('拿最大值===>',Math.min.call(this,28,4,5,8,9,6767));




 function aa(arr) { 
   console.log('shuchu==',[3].slice.apply(this,arr));
  return [].slice.apply(this, arr)

 }

 let r = [1,4,8,9]
 console.log(aa(r));