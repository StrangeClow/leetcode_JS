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
const arrayRankTransform = function(arr) {
     
    let tempArr = new Map()

    arr.sort((a, b)=> {
        return a - b
    })

 console.log('arr====',arr)


}



let n = [40, 10, 20, 30]
console.log(arrayRankTransform(n))