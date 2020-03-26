/**
 *   求 1+2+...+n ，要求不能使用乘除法、
 * for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 *
 * @param {*} number
 * @returns
 */
const sumNums = function(number) {
    
    // 尾递归(最后一步调用自身)
   if(number > 0) {
      // number（当前值） + sumNums(number - 1) （当前值减一）
       return number + sumNums(number - 1)
   }

}



console.log(sumNums(3));