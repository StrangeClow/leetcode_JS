

/**
 *  
 * 
 * @param {*} arr   arr表示平铺的数组
 * @param {number} [depth=1]   depth代表平铺的深度
 */
const flatten = (arr, depth =1) => 
    depth != 1
    ? arr.reduce((prev,curr) => prev.concat(Array.isArray(curr) ? flatten(curr, depth -1): curr),[])
    : arr.reduce((prev, curr) => prev.concat(curr),[])


     console.log('扁平化数组信息===>',flatten([1, [2,[5,6,[8,9]]], 3, 4],2));


const flattenOne = (arr, depth =1) => {
    if(depth == 1) {
        console.log('arr===>',arr);
      arr.reduce((prev,curr)=> {
          console.log('prev===>',prev,curr);
          prev.concat(curr)
      },[])
    } else {
        arr.reduce((prev,curr,index,arrInfo)=> {
            console.log('prev,curr,index,arrInfo',index,arrInfo);
            prev.concat(Array.isArray(curr) ? flattenOne(curr,depth -1): curr)
        },[])
    }
}

// console.log('扁平化数组===>',flattenOne([1, [2,[5,6,[8,9]]], 3, 4],2));


// const aa = (arrr)=> 
// console.log('arr',arrr);
//      arrr.reduce((prev,curr,index,arrInfo)=> {
//         console.log(prev,curr,index,arrInfo);
//         return prev+ curr
//     },[])


// console.log('aa=====>',aa([1,2,3,4,5,6]));

console.log(1+2+'3');   // 33
console.log('3'+2+1);   // 321
console.log(!0&&6);    // 6   // 记住短路相关的运算问题


var a = 10;
(function a() {
    console.log(a);
    var a = b = 100;     // 注意赋值的顺序  从右往左
    console.log(a);
})();
console.log(a+b);


function F1() {
    this.name = 'f1'
}

function F2() {
    this.name = 'f2'
    return {}
}
console.log(new F1().name);
console.log(F1().name);
console.log(new F2().name);
console.log(F2().name);