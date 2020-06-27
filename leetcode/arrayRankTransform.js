/**
 *  数组序号转换 
 * 
 * 
 *    给定一个整数数组arr 请你将数组中的每个元素替换为他们排序后的数组 
 * 
 * 序号代表了一个元素有多大 
 *
 * @param {*} arr
 * @returns
 */
const arrayRankTransform = function(arr) {     //  map应用      
     
    let tempMap = new Map()
    // 数据排序 
    arr.sort((a, b)=> {
        return a - b
    })

    let index = 1

    for(let i = 0; i < arr.length; i++) {
      if(!tempMap.has(arr[i])) {
         // map.set(a,b)
         tempMap.set(arr[i], index++)
      }
    }  
    console.log(tempMap);
    const res = []
    // 当前数据已排序
    for(let i = 0; i < arr.length; i++) {
       if(tempMap.has(arr[i])) {
        
           // 拿索引  
           console.log('装索引===',tempMap.get(arr[i]));
          res.push(tempMap.get(arr[i]))
       }
       
    }
    return res

 console.log('arr====',arr)


}



let n = [40, 10, 20, 30]
console.log(arrayRankTransform(n))