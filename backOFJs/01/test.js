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
          value: '贝贝'
      }];

      let c=  [99,88,77,10,0.9,88,33,77,0.9,1,1]



    //  数组对象去重 
    var hash = {};
    arr = arr.reduce(function(item, next) {
        //将数组元素值当做对象的属性
        hash[next.key] ? '' : hash[next.key] = true && item.push(next)
        return item
    }, [])

   console.log(arr);


  console.log([...new Set(JSON.stringify(arr))]);
  // 简单值
  console.log([...new Set(c)]);



