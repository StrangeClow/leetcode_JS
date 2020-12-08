/**
 * 气球的最大数量  
 * 
 *     给定一个字符串text，你需要使用text中的字母来拼凑尽可能多的单词“balloon”
 * 字符串中每个单词最多只能被使用一次，请你返回最多可以拼凑出多少个单词“balloon”
 *
 * @param {*} text
 * @returns
 */
const theBalloonsOfMaxNumber = function(text) {
   // 构建hash
    let tempMap = {}
    
    let arr = []


    for(let item of text) {
       console.log('item====',item)

       tempMap[item] = (tempMap[item] || 0) + 1

    }

    


}