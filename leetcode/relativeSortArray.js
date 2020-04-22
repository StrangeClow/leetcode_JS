/**
 *   数组的相对排序
 * 
 *    给你两个数组，arr1 和 arr2，
 *         arr2 中的元素各不相同arr2 
 *         中的每个元素都出现在 arr1 中对 arr1 中的元素进行排序，
 * 
 *  使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
 * 未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 * 
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
const relativeSortArray = function(arr1, arr2) {
   
   let tempArr = arr1.filter((item,index)=> {
      return !arr2.includes(item)
   }).sort((a,b)=> a -b)

   console.log('temparr====',tempArr);

   let tempList = []

   arr2.forEach((item,index)=> {
      console.log(item,index);
      // arr1中是否存在arr2的某个值
      while(arr1.indexOf(item) > - 1) {
         let i = arr1.indexOf(item)

      tempList.push(arr1[i])
      // splice()
      arr1.splice(i, 1)
      }
   })

   return tempList.concat(tempArr)
}



let a1 = [2,3,1,3,2,4,6,7,9,2,19]
let a2 = [2,1,4,3,9,6]

console.log(relativeSortArray(a1, a2));