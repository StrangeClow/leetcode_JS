/**
 *     删除数组中指定索引的值   
 *      
 * filter过滤数组指定值  includes进行判断  
 *
 * @param {*} arr
 * @param {*} pullArr
 * @returns
 */
const pullAtIndex = (arr, pullArr) => {
    let removed = [],
        pulled = arr
          .map((v, i)=> (pullArr.includes(i) ? removed.push(v) : v))

          .filter((v, i)=> !pullArr.includes(i))
        
          // 将数组长度置为0
           arr.length = 0

          pulled.forEach(v=> arr.push(v))
          
          return removed
}