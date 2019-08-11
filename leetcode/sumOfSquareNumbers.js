/**
 *  题意： 给定一个非负整数才 判断是否存在两个整数A B使得 a^2 + b^2 = c
 * 
 *  
 *
 * @param {*} c
 * @returns
 */
var judgeSquareSum = function(c) {
    // 先取的数字c的开方然后取整
    let m = parseInt(Math.sqrt(c));
    // 循环遍历 知道该数字减去i的平方然后判断其是否是整数，是则返回true  否则  false
     for(let i= m;i>-1;i--)
         {
             if(Math.sqrt(c-(i*i))%1==0)
                {
                    return true;
                }
        }
    return false;
};