/**
 *   返回url参数的对象
 *
 * @param {*} url   url参数
 */




  let a1 = 'https://music.163.com/#/discover/toplist?id=2006508653'


  let a2 = 'http://url.com/page?name=Adam&surname=Smith'






    const getURLParameters3 = function(url) {
       
      // 正则匹配  匹配url路径的参数间隔符  ？ = & 等
      let regexp = /([^?=&]+)(=([^&]*))/g
      // 正则匹配后的参数值
      let regUrl = url.match(regexp)
      let res = regUrl.reduce((prev, curr) => 
          (
            // slice（start，end）从已有的数组中返回选定的元素 
           (prev[curr.slice(0, curr.indexOf('='))] = curr.slice(curr.indexOf('=') + 1))
           ,prev) 
        ,{})
      return res
    }

console.log('解析url参数',getURLParameters3(a2));

