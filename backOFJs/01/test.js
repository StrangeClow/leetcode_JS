(function() {
    console.log(arguments[0]+arguments[1]);
})(12,890)


!(function(a,b){
 let c =  a + b
 console.log(c)
}(1,2))

~(function(a,b){
 let c =  a + b
 console.log(c)
}(1,2))


~(function(a,b){
 let c =  a + b
 console.log(c)
}(1,2))


let arrObj = [{
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

      
      
      //  数组对象去重 
      var hash = {};    // hash对象 
      arrObj = arrObj.reduce(function(item, next) {
          //将数组元素值当做对象的属性
          hash[next.key] ? '' : hash[next.key] = true && item.push(next)
          return item
        }, [])
        
        console.log(arrObj);
        
        
        console.log([...new Set(JSON.stringify(arrObj))]);


  // 简单值
  let c=  [99,88,77,10,0.9,88,33,77,0.9,1,1]

  console.log([...new Set(c)]);




const  uniqueObj =  function(arr) {
  
   var obj = {};
        arr = arr.reduce(function(item, next) {
          obj[next.value] ? '' : obj[next.value] = true && item.push(next);
          return item;
       }, []);
       return arr
  }

  
let arrO = [{
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
      key: '05',
      value: '哈哈'
  }];

console.log(uniqueObj(arrO));





var a = [0];
if (a) {
  console.log(a == true);
} else {
  console.log("wut");
}



console.log(Object.entries("jumi"));