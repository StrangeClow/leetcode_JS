/**
 * 左旋转字符串
 * 
 *  字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部，定义一个函数实现字符串的左旋转操作。
 * 
 *   input====> 'abcdefg' 
 *   output===> 'cdefgab'
 *
 * @param {*} str
 * @param {*} n
 * @returns
 */
const reverseLeftWords = function(str, n) {
    //arr.slice(start(必须),end(可选))  规定从何处选取元素
    return str.slice(n) + str.slice(0 ,n) 
}


console.log(reverseLeftWords('abcdefg',2));



/**
 *
 *
 * @param {*} str
 * @param {*} n
 */
const  reverseLeftWords2 = function(str, n) {
    
    // 计数
    let index = 0;
    
    // 字符串转数组
    let tempArr = [...str]

    while(index < n) {
        // 取首位值 把数组的第一个元素删除并返回当前被删除的元素 
        tempArr.push(tempArr.shift())
        index ++
    }
    console.log('临时数组',tempArr);
    return tempArr.join('')
}

console.log(reverseLeftWords2('abcdefghi',3));