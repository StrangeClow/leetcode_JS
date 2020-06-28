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
const arrayRankTransform = function(arr) {     //  待纠正    
     
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






const arrayRankTransform2 = function(arr) {    //   hash表

   let newArr = [...arr].sort((a,b)=>   a - b)

   const rankMap = getRankMap(newArr)
   
    return arr.map((item)=> rankMap.get(item))

   }
      function getRankMap(arr) {
         let rankMap = new Map()
   
         let rank = 1
   
         for(let key of arr) {
          
           if(!rankMap.has(key)) {
              // map.set(A,B)
               rankMap.set(key, rank++)
           }
         }
         return rankMap
      }

let n1 = [40, 10, 20, 30]

console.log(arrayRankTransform2(n1))
