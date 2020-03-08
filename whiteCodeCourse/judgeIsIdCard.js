/**
 *   身份证是否符合规则
 *
 */
const judgeIsIdCard = function(num) {
  
    // 正则表达式验证  test return ==> true fasle
    let regExp = /(^(d{15})|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    
    return regExp.test(num)
}