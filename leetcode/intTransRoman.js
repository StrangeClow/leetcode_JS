/**
 * 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，
 * 即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 
 * 
 * 
 * 
 *
 * @param {*} nums
 * @returns
 * 
 * 先定义一个对象，将罗马数字与罗马字符串存储在对象之中，
 * 然后倒叙遍历输入字符串，判断相邻两者的大小，
 * 
 * 
 */
var romanObj = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000};   
var romanToInt = function(nums) {
    let max = 0,
    result = 0,
    len = nums.length - 1
    for (var i =len; i >= 0; i--) {
        var currRoman = nums[i];
        var currVal = romanObj[currRoman];
        result += currVal >= max ? currVal : -currVal;   // 若currVal大于等于 max 则去currVal 否则currVal -1
        max = Math.max(max, currVal);   // 求取最大值
    }
    return result;
}