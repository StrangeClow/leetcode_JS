/**
 * 过滤掉数组中的非唯一值    indexOf    lastIndexOf  一前一后索引 
 *
 * @param {*} arr
 * @returns
 */
const filterNonUnique = function(arr) {
  
     return arr.filter((item, index)=> {
        //  console.log(item, index);

         // arr.indexOf() 查询某一个数首次出现的位置  没有则返回  -1
         // arr.lastIndexOf() 查询值最后一次出现的位置 


         // 若成立 表明有大于等于两个的值存在  抛出符合要求的值   
        return arr.indexOf(item) === arr.lastIndexOf(item)
     })

}


let  n = [1,2,2,3,4,5,6,7,5]
console.log(filterNonUnique(n));


