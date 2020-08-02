/**
 *   返回url参数的对象
 *
 * @param {*} url   url参数
 */




  let a1 = 'https://music.163.com/#/discover/toplist?id=2006508653'
  let a2 = 'http://url.com/page?name=Adam&surname=Smith'

  let a3 = 'https://zh-hans.reactjs.org/docs/context.html#___gatsby'

  let a4 = 'https://leetcode-cn.com/problems/reverse-integer/solution/hua-jie-suan-fa-7-zheng-shu-fan-zhuan-by-guanpengc/'
  let a5 = 'http://www.domain.com/?user=sdksdsfdf&id=123&city=%E5%8C%97%E4%BA%AC&enabled';

  let a6 = 'http://www.domain.com/?user=anonymous&id=456&city=的分类的咖啡店了辅导费';



const getURLParameters = function(url) {
       
      // 正则匹配  匹配url路径的参数间隔符  ？ = & 等
      let regexp = /([^?=&]+)(=([^&]*))/g
      // 正则匹配后的参数值
      // str.match()来获取所有的键值对     //  decodeURI解析编码
      let regUrl = decodeURI(url).match(regexp)
      console.log('正则匹配==',regUrl);
       return regUrl.reduce((prev, curr) => 
          (
            // slice（start，end）从已有的数组中返回选定的元素 
           (prev[curr.slice(0, curr.indexOf('='))] = curr.slice(curr.indexOf('=') + 1))
           ,prev) 
        ,{})
     
    }

console.log('解析url参数a1==>',getURLParameters(a1));
console.log('解析url参数a2==>',getURLParameters(a2));
console.log('解析url参数a5==>',getURLParameters(a5));
console.log('解析url参数a6==>',getURLParameters(a6));
// console.log('解析url参数',getURLParameters(a4));




const getURLParameters2 = function(url) {     //  拆分方法使用场景比较少  

  let res = {}
    let urls = decodeURI(url).split('?')
    console.log(urls);
     let arr = urls[1].split('&')
    console.log(arr);
    // var arr = url.substr((decodeURI(url)).indexOf('?') + 1).split('&')   //  等价 
  
  for(let i = 0; i <arr.length; i++) {
    let a  = arr[i].split('=')
    res[a[0]] = a[1]
  }
  return res

}
let a9 = 'http://www.domain.com/?user=sdksdsfdf&id=123&city=%E5%8C%97%E4%BA%AC&enabled=false&name=英语';
console.log(getURLParameters2(a9));
console.log(getURLParameters2(a1));
console.log(getURLParameters2(a2));





// URLSearchParams()处理url的查询字符串 


let a7 = 'https://u.geekbang.org/lesson/27?article=248169&utm_source=time_web&utm_medium=menu&utm_term=timewebmenu'
var searchParams = new URLSearchParams(a7);

for (let p of searchParams) {
  console.log('p===>',p);
}
console.log( typeof 'hello');    // string


let a8 = 'http://www.domain.com/?user=sdksdsfdf&id=123&city=%E5%8C%97%E4%BA%AC&enabled&name=hello';
let parsingUrl = new URLSearchParams(a8)

for(let item of parsingUrl) {
  console.log('解析a8参数====>',item);
}

let testUrl = new URL(a8)
console.log('new URL解析====>',testUrl);

function getUrlQueyr(search) {
  const searchObj = {};
  for (let [key, value] of new URLSearchParams(search)) {
      searchObj[key] = value;
  }
  return searchObj;
}
console.log('getUrlQueyr====>',getUrlQueyr(a8));
