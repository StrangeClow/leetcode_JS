/**
 *   简易数组去重
 * 
 *    new Set()  set集合存储不重复元素的特性 
 * 
 *   ...  解构
 *
 * @param {*} arr
 */
const distinctValuesOfArray = arr => [... new Set(arr)]



console.log(distinctValuesOfArray([1,2,3,4,5,6,4,3]));


/**
 *   简单数组值去重  
 * 
 *      循环比较判断 
 *
 * @param {*} arr
 * @returns
 */
const distinctValuesOfArray2 = function(arr) {
    // 新增了内存空间 
    let temp = [], aa = []
    for (let index = 0; index < arr.length; index++) {
        // 当前temp里面不存在循环的某一项 添加当前循环的项 
        if(!temp.includes(arr[index])) {
            // 装入另外一个空间
            aa.push(arr[index])
        }
        temp.push(arr[index])
    }
    return aa
}


let nn = [8,9,4,6,1,3,10,4,9]

console.log(distinctValuesOfArray2(nn));



const distinctValuesOfArray3 = function(arr) {
    
    let tempMap =new Map()
    for(let index = 0; index < arr.length; index ++) {
      
        if(!tempMap.has(arr[index])) {
            console.log('符合条件的数据====',arr[index])
            // tempMap.set(index,arr[index])
            tempMap.set(arr[index],index)
            
        }
    }
    console.log(tempMap)
    //  Array.from
    let res = []
    for(let key of tempMap.keys()) {
        console.log(key)
        res.push(key)
    }
   
    return res
}

let nn1 = [8,9,4,6,1,3,10,4,9]
console.log(distinctValuesOfArray3(nn1))