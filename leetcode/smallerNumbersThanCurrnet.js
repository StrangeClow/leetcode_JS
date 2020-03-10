/**
 *    给你一个数组 nums，对于其中每个元素 nums[i]，
 * 请你统计数组中比它小的所有数字的数目。换而言之，
 * 对于每个 nums[i] 你必须计算出有效的 j 的数量，
 * 其中 j 满足 j != i 且 nums[j] < nums[i] 。
 * 
 * 
 * 
 *   input ==> [8,1,2,2,3]
 *   output ==>  [4,0,1,1,3]
 *
 * @param {*} num
 * @returns
 */
const smallerNumbersThanCurrnet = function(num) {
    let resArr =[]
     num.reduce((prev,curr)=> {
         let count = 0
       num.forEach(element => {
          if(element < curr) {
            //   console.log('count======',count);
             count ++
          } 
       });
        console.log('count==',count);
        resArr.push(count)
     },[])
     return resArr
}


let a1 = [8,1,2,2,3]
console.log(smallerNumbersThanCurrnet(a1));