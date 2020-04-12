/**
 *    返回两个或两个以上数字的平均值 
 *
 * @param {*} nums
 */
const average = (...nums) => 
      [...nums].reduce((acc,val) => 
      acc+ val, 0) / nums.length

      
let n = [1,2,3,4,5,6,7,8,9,10]      
// console.log(average(n));
console.log(average(1,2,3));



// 累加求和再除以输入数字的个数  
const average2 = function(...arr) {
      console.log('arr===',arr);
      return [...arr].reduce((curr,prev)=> {
            return curr+ prev
      },0) / arr.length
}


console.log(average2(1,2,3,4,5,6,7,8,9));