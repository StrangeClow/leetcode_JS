/**
 *   分割平衡字符串    (贪心算法)
 * 
 * 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
 * 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 * 返回可以通过分割得到的平衡字符串的最大数量。
 * 
 * 
 * 举个例子  ： 
 * 
 *  input===> RLRRLLRLRL
 *  output===> 4 
 *
 * @param {*} str
 * @returns
 */
const balancedStringSplit = function(str) {
    
    let num = 0
    // 计数标记
    let res = 0

    for (let index = 0; index < str.length; index++) {
        if(str[index] !== 'R' || str[index] !== 'L') {
           return false
        }
        // 判断是否符合规则 
        if(str[index] === 'R') {
          num ++
        } 
        else {
            num--
        }
        //  当前 l  + r 等于0时， count加1
        if (num === 0) {
            res++;
        }

    }

    return res
}


let s = "RLRRLLRLRL"
console.log(balancedStringSplit(s));