/**
 *   随即洗牌算法  
 * 
 *    math.random()
 *
 * @param {*} tempArr
 * @returns
 */
const shuffle = function(tempArr) {
   const len = tempArr.length
   let curr = len - 1
   let tempRandom
   while(curr >-1) {
     random = Math.floor(len * Math.random())
     //  解构赋值 交换变量
     [tempArr[curr], tempArr[tempRandom]] = [tempArr[tempRandom], tempArr[curr]]; 
     curr--;
   }
   return tempArr
}