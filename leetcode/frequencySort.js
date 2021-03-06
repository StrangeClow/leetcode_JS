/**
 *  根据字符出现频率排序  
 * 
 *    给定一个字符串str,请将字符串里的字符按照出现的频率降排列 
 * 
 *    input====> tree  
 *    output====> eert
 * 
 * 
 *   1. 计算字符串中各个字符出现的次数 
 *   2. 数据排序 
 *   3. 拼接字符 输出结果 
 * 
 *
 * @param {*} str
 * @returns
 */
const frequencySort = function(str) {               //  (来源于leetcode) 还有点问题  待纠正 2020-08-11
   
    let tempMap = new Map()

    for (let index = 0; index < str.length; index++) {
        // 若当前hash值中存在属于当前索引的值 
        if(tempMap.has(str[index])) {
            // map.set(a,b)
           tempMap.set(str[index], tempMap.get(str[index]) +1 )
        }
        else {
            tempMap.set(str[index], index)
        }
    }

    let tempArr = []

    tempMap.forEach((item,index)=> {
        return tempArr.push({
            name: index,
            value: item
        })
    })
    console.log('tempArr==',tempArr);
    tempArr.sort((a,b)=> {                 // 排序 
        return b.value - a.value
    })

    let res = ''

    for (let index = 0; index < tempArr.length; index++) {    // 拿value 
       
        // value值
       let tempName = tempArr[index].name
        // 索引值
       let tempValue = tempArr[index].value
     
       for(let j = 0; j < tempValue; j++) {
           console.log('tempName',tempName);
        res += tempName
        
       }
    }
   
    return res 
}


let s1 = 'tree'

console.log(frequencySort(s1));