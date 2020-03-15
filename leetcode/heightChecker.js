/**
 *  高度检测器
 * 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
 * 请你返回能让所有学生以 非递减 高度排列的最小必要移动人数。注意，
 * 当一组学生被选中时，他们之间可以以任何可能的方式重新排序，而未被选中的学生应该保持不动。
 *
 * @param {*} heightsArr
 */
const heightChecker = function(heightsArr) {
   
    let tempHeight = [...heightsArr]
    // 输入高度排序
    heightsArr.sort((a, b)=> {
        return a - b
    })
    console.log(heightsArr);

    let count = 0

    heightsArr.forEach((element, index) => {
       // 若排序后的某一项 
      if(element !== tempHeight[index]) {
          count ++
      }

    })

   return count
}



let n1 = [1,1,4,2,1,3]

console.log(heightChecker(n1));