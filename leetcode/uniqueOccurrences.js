/**
 *    独一无二的出现次数  
 * 
 *  给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 *
 * @param {*} arr
 * @returns
 */
const uniqueOccurrences = function(arr) {       //  有问题  每个数字的出现次数不一样  并非总长度 
   
    let map = new Map()
    let res = []
    for(let index = 0; index < arr.length; index++) {
      if(!map.has(arr[index])) {
        // map的索引和值
        map.set(index, arr[index])
        // 删除当前元素 
        console.log(map.get(index));
        map.delete(arr[index])
      }
    }
    console.log(map);
    return [...map.values()].length !== arr.length
}


let n = [1,2,2,1,1,3]
console.log(uniqueOccurrences(n));







const uniqueOccurrences2  = function(arr) {   // 比操作之后的数组长度 

  let obj = {}
  
  arr.forEach(element => {
    obj[element]  = obj[element] ? ++obj[element] : 1
  });

  let list = []

  for(let element in obj) {
    list.push(obj[element])
  }
  
  return [...new Set(list)].length !== list.length      // 拿处理后的数据长度对比   
}


let n2 = [1,2,2,1,1,3]
let n3 = [1,2,3,4]
console.log(uniqueOccurrences2(n2));
console.log(uniqueOccurrences2(n3));





