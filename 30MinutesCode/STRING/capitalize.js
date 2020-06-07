/**
 *  将字符串的首字母大写 
 * 
 *   数组解构和s.toUpperCase() 大写第一个字母  用...rest获取第一个字母后字符数组
 * 然后在array.join('')转为字符串
 * 
 * @param {*} [first,...rest]
 * @param {boolean} [lowerRest=false]
 */
const capitalize = ([first,...rest], lowerRest = false) => 
 
     first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))


   let a1 = 'hello world info'
   console.log('首字母大写',capitalize(a1));  


   /**
    *    解构入参  rest参数 
    *
    * @param {*} [first, ...rest]
    * @returns
    */
   const capitalize2 = function([first, ...rest]) {
      console.log('首字符',first);
      console.log('剩余字符',rest);
      return `${first.toUpperCase()}${rest.join('')}`
   }

   let a2 = 'goodlucktoall'
   console.log('22=>',capitalize2(a2));