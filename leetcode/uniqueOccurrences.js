/**
 *    独一无二出现的次数  
 * 
 *  给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 *
 * @param {*} arr
 * @returns
 */
const uniqueOccurrences = function(arr) {
   
    let map = new Map()
    for(let index = 0; index < arr.length; index++) {
      // map.has(obj[key])
      if(map.has(arr[index])) {
          console.log('object',arr[index]);
          // map.delete(arr[index])
           map.delete(arr[index])
           
      }

      map.set(index,arr[index])
    }
    console.log(map);
}




let n = [1,2,2,1,1,3]
console.log(uniqueOccurrences(n));




function a() {
  let n= 10
  if(true) {
    let n = 100
  }
  console.log(n)
  
}
console.log('打印n',a())    // 10




var n1 = 123
function f1() {
  console.log('f1====>',n1)
}
function f2() {
  var n = 456
  // 里面读不到值  声明提升 赋值未提升 
  // f1()
}

//  console.log('执行f2====>',f2())
f2()
console.log(n1)




var length = 100
function f3() {
  console.log(this.length)  // 100
}

var obj = {
  x: 10,
  f4: function(f3) {
     f3()
     arguments[0]()  //  arguments[0] = f1  f1有两个参数  所以length = 2
  }
}

// 当前obj对象调用f4()
obj.f4(f3, 1)    // 输出 100  2