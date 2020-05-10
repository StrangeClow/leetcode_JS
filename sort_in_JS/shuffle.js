/**
 *   随即洗牌算法  
 * 
 *    Math.random()拿到随机数
 *
 * @param {*} tempArr
 * @returns
 */
const shuffle = function(tempArr) {

   const len = tempArr.length
   let curr = len - 1
   let tempRandom

   while(curr >=1) {
     // Math.random随机取值并取浮点型数据
     tempRandom = Math.floor(len * Math.random())
    
     //  解构赋值 交换变量
     [tempArr[curr], tempArr[tempRandom]] = [tempArr[tempRandom], tempArr[curr]]; 
     // 递减
     curr--
   }
   console.log('随机===',tempArr);
   return tempArr
}


let n = [1,2,3,4,5,6,7,8,9]
console.log(shuffle(n));