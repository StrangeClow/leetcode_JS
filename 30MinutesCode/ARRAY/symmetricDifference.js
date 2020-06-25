/**
 *  数组差集
 * 
 *     给定两个数组arr1和arr2, 返回两个数组间的差值  
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns
 */
const symmetricDifference = function(arr1, arr2) {

    let tempArr1 = new Set(arr1)

    let tempArr2 = new Set(arr2)

    console.log(tempArr1, tempArr2, typeof tempArr1,  Array.isArray(tempArr2) , Array.isArray(arr1))
    
    //  ...arr    return [...a1, ...a2]  去重展开再组合 子项 
    return [...arr1.filter((item1,index1)=> {

        

        return !tempArr2.has(item1)

    }), ...arr2.filter((item2,index2)=> {

      

        return !tempArr1.has(item2)
    })
   ]

}



let n1 = [1,2,3]
let n2 = [1,2,4]

console.log(symmetricDifference(n1, n2))