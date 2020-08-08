/**
 *  题意： 求取两个数组的交集
 *    js相关的方法的熟练操作相关
 *
 * @param {*} nums1
 * @param {*} nums2
 * @returns
 */
var intersectionInTwoArrays = function(num1, num2) {
  // 定义初始集合
 const resultArr = []
 // 取两数组的最大长度
 let maxLength = Math.max(num1.length,num2.length) 
 console.log('最大值==',maxLength)   
 for (let i = 0; i < maxLength; i++) {
   // es6数组方法includes
    if (num2.includes(num1[i]) && !resultArr.includes(num1[i])) {    
      resultArr.push(num1[i])
    }
  }
  return resultArr
}

let a9 = [1,3,4,9,6]
let a8 = [0,4,8,3]
console.log(intersectionInTwoArrays(a9,a8));





var intersectionInTwoArraysTwo = function(nums1,nums2) {
    let result = []
    for(let num1 of nums1) {  // 循环
        if(nums2.includes(num1)) {  // 如果包含  includes 
            if(!result.includes(num1))  {
            // 结果中无nums1
              result.push(num1)
            }
          } 
    }
    return result
}


let a1 = [1,3,4,9,6]
let a2 = [0,4,8,3]

// output ===> [3,4]
//console.log('数组交集===>',intersectionInTwoArraysTwo(a1,a2))


/**
 *   数组的交集
 *
 * @param {*} nums1
 * @param {*} nums2
 */
const intersectionInTwoArrays3 = function(nums1, nums2) {
  
  // 创建set的实例
  let tempSet = new Set()
  // 定义一个空数组
  let result = []

  // 循环数组1 把数据添加到临时set中
  nums1.forEach(element => {
    tempSet.add(element)
  })
  console.log('tempSet11',tempSet)

  // 循环数组2 并临时set中是否存在当前元素 
  nums2.forEach((element,index)=> {
    if(tempSet.has(element)) {
      // push到res中
      result.push(element)
        // 删除当前元素 
        console.log('删除前',tempSet)
        tempSet.delete(element)
    }
  })

  return result
}


let n1 = [3,5,6,7,2] 
let n2 = [8,4,2,6,1]

 console.log('数组交集===>',intersectionInTwoArrays3(n1,n2)) 
 // output ==> [6,2]