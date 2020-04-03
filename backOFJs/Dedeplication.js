/**
 *  数组对象去重 
 *
 * @param {*} arr
 * @returns
 */

var arrList = [{
    "key": '01',
    "value": '乐乐'
   }, 
   {
      "key": '02',
      "value": '博博'
   }, 
   {
    "key": '03',
    "value": '淘淘'
    },
    {
       "key": '04',
       "value": '哈哈'
    },
    {
       "key": '01',
       "value": '贝贝'
  }];

const Dedeplication = function(arr) {
    // hash对象
    let hashObject = {}
    // reduce()
    const reduceArr = arr.reduce((prev,curr)=> {
        // 不为空  
        // 为真则添加进去
        hashObject[prev.name] ? '' : hashObject[curr.name] = true && prev.push(curr)
        return prev
    },[])
    console.log('reduceArr==',reduceArr);
    return reduceArr
}
var arr2 = [{
    "name": "ZYTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "AAAAAA.doc"
}, {
    "name": "ZYTA",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "BBBBBB.doc"
}, {
    "name": "ZDTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "CCCCCC.doc"
}, {
    "name": "ZYTX",
    "age": "Y13xG_4wQnOWK1QwJLgg11d0pS4hewePU95UHtpMl3eE81uS74NC-6zu-Rtnw4Ix",
    "gender": "AAAAAA.doc"
}];

var hash = {};
let arr1 = arr2.reduce(function(item, next) {
    // a[b]  a对象的b属性 
    hash[next.key] ? '' : hash[next.key] = true && item.push(next);
    return item
}, [])

console.log('',arr1);

// console.log(Dedeplication(arr2));
