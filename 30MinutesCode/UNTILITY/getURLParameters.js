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



    const getURLParameters3 = function(url) {
       
      // 正则匹配  匹配url路径的参数间隔符  ？ = & 等
      let regexp = /([^?=&]+)(=([^&]*))/g
      // 正则匹配后的参数值
      // str.match()来获取所有的键值对
      let regUrl = url.match(regexp)
      console.log('正则匹配==',regUrl);
      let res = regUrl.reduce((prev, curr) => 
          (
            // slice（start，end）从已有的数组中返回选定的元素 
           (prev[curr.slice(0, curr.indexOf('='))] = curr.slice(curr.indexOf('=') + 1))
           ,prev) 
        ,{})
      return res
    }

console.log('解析url参数',getURLParameters3(a1));
console.log('解析url参数',getURLParameters3(a2));
console.log('解析url参数',getURLParameters3(a5));
console.log('解析url参数',getURLParameters3(a6));
// console.log('解析url参数',getURLParameters3(a4));




/**
 *    获取url参数  
 *
 * @param {*} url
 * @returns
 */
const getURLParameters1 = function(url) {
  console.log(url);
  // 正则匹配 
   let reg = new RegExp("(^|&)" + url + "=([^&*])(&|$)")
   console.log(reg);
   // substr()
   // match()
   let res= window.location.search.substr(1).match(reg)
    console.log(res);
   if(res !== null) {
      // unescape()
       return unescape(res[2])
   }
   return null

}


console.log(getURLParameters1(a1));

function a(b) {
  return Object.prototype.toString.call(b)
}

console.log(a(12));