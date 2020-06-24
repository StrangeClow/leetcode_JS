/**
 *   剪枝问题 
 *      在一条马上路，有很多树，树的高度不一，现在要统一剪枝到高度h,大于h,需剪刀h,小于则不变，所有
 *    树减掉的总长度为C, 现在要使C>某个值的情况下(MM) 使h最大 ，求怎么确定h
 *
 * @param {*} list
 * @param {*} MM
 * @param {*} range
 * @returns
 */
function cutTree(list,MM,range) {
    // 边界处理
   if(list.length == 0) {
       return 0
   }
   let start = 0,
       end = Math.max(...list)   // 取list的最大值
    // 前置循环    
    while(start <= end) {
      //  
      const middle = start + ((end - start) >> 1)
      let res = 0
      for(let i = 0; i < list.length; i++) {
         if(list[i] < middle) {
             res = res + list[i] - middle
         }
      } 
      if(res > MM) {
         if(res - MM <= range) {
            return middle
         }
         end = middle - range
      }
      else {
          start = middle + range
      }
    }   
    return -1
}

