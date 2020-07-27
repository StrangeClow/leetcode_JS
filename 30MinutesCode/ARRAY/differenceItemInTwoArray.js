/**
 *  求取两个数组中的不同值 并return  
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
const difference = (a,b) => {
    // new Set() 去重 对数组b中元素去重
    const s = new Set(b);   
    // 过滤非值 存在a中但不存在b中
    return a.filter( x => !s.has(x))
}
// input ([1,2,3,4],[1,2,3])   output==>[4]

let n1 = [1,2,3,4,5]   
let n2 = [3,4,6,8,5]
console.log(difference(n1,n2))







//   找出两个数据之间的差值 
const difference2 = function(a, b) {
    
   let tempA = new Set(a)
   let tempB = new Set(b)

   return [...tempA].filter((item, index)=> {
        
   })

}


let n3 = [1,2,3,4,5]
let n4 = [3,4,6,8,5]
console.log(difference2(n3,n4));