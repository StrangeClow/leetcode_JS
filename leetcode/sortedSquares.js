/**
 *   有序数组的平方
 * 
 * 给定一个按非递减顺序排序的整数数组A，返回每个数字的平方组成的新数组，要去也按非递减顺序。  A[index] * A[index]
 * 
 * input====> [-4, -1, 0, 3, 10]
 * output====> [0, 1, 9, 16, 100]
 *
 * @param {*} A
 * @returns
 */
const sortedSquares = function(A) {

    return A.map((item,index)=> {

        // console.log('各子项===',item, index);
        // 直接拿数学公式 math.pow(item, 2)
        return Math.pow(item, 2)
    
        // 拿到的结果在数学排序  arr.sort()
    }).sort((a,b) => {
        return a - b
    })
}



let a1 = [-4, -1 ,0 ,3, 10]
console.log(sortedSquares(a1));



const sortedSquares2 = function(A) {
  // 循环集合A 并拿到子项平方
    let tempArr = A.map((item,index)=> {
      console.log('子项数据集====',item, index);
      return item * item
  })
  console.log('平方后====',tempArr);
  return tempArr.sort((a,b)=> {
      return a - b
  })
}

let a2 = [-3, -1 ,0 ,4, 8,16]
console.log(sortedSquares2(a2));


function Foo(){};
Foo.prototype.a = 3;
var f1 = new Foo;
var f2 = new Foo;

console.log(Foo.prototype.a);//1
console.log(f1.a);//1
console.log(f2.a);//1

function foo() {}

let foo1 = new foo()
let foo2 = new foo()

console.log('foo1',foo1);
console.log('foo2',foo2);
console.log('foo2与foo1',foo1 === foo2, foo1 == foo2);
console.log('foo2与foo1的prototype=========>',foo1.prototype === foo2.prototype, foo1.prototype == foo2.prototype);
console.log('foo2与foo1的proto=======>',foo1.proto === foo2.proto);
console.log('foo2与foo1的_proto_=======>',foo1._proto_ === foo2._proto_);



function Sum(x, y) {
    console.log(x ,y);
    let a = x * y
    return a
}

Sum.prototype.a = 190.34
Sum.prototype.getSum = function(z) {
    console.log('继承prototype');
   return z * 0.834
}

// 函数也是对象 

let sum1 = new Sum()
let sum2 = new Sum()

console.log('sum1===sum2====>',sum1,sum2);
console.log(sum1.a);
console.log(sum2.getSum(3));