/**
 *   有序数组的平方
 * 
 * 给定一个按非递减顺序排序的整数数组A，返回每个数字的平方组成的新数组，要去也按非递减顺序。
 * 
 * input====> [-4, -1, 0, 3, 10]
 * output====> [0, 1, 9, 16, 100]
 *
 * @param {*} A
 * @returns
 */
const sortedSquares = function(A) {

    return A.map((item,index)=> {

        // console.log('各子项===',item, index);
        // 直接拿数学公式 math.pow(item, 2)
        return Math.pow(item, 2)
    
        // 拿到的结果在数学排序  arr.sort()
    }).sort((a,b) => {
        return a - b
    })
}



let a1 = [-4, -1 ,0 ,3, 10]
console.log(sortedSquares(a1));



const sortedSquares2 = function(A) {
  // 循环集合A 并拿到子项平方
    let tempArr = A.map((item,index)=> {
      console.log('子项数据集====',item, index);
      return item * item
  })
  console.log('平方后====',tempArr);
  return tempArr.sort((a,b)=> {
      return a - b
  })
}

let a2 = [-3, -1 ,0 ,4, 8,16]
console.log(sortedSquares2(a2));