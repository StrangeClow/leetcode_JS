(function() {
    console.log(arguments[0]+arguments[1]);
})(12,890)


var arr = [{
       key: '01',
       value: '乐乐'
    }, 
    {
       key: '02',
      value: '博博'
    }, 
    {
       key: '03',
       value: '淘淘'
       },
       {
          key: '04',
          value: '哈哈'
       },
       {
          key: '01',
      value: '乐乐'
      }];

      let c=  [99,88,77,10,0.9,88,33,77,0.9,1,1]
var hash = {};
arr = arr.reduce(function(item, next) {
    hash[next.key] ? '' : hash[next.key] = true && item.push(next);
    return item
}, [])
console.log(arr);

console.log([...new Set(JSON.stringify(arr))]);
console.log([...new Set(c)]);


//持续更新 

// 感觉要凉凉了    

//gengin

// 好习惯
