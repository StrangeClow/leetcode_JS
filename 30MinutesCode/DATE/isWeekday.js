/**
 *   判断是是否只周末   返回布尔值 
 *    
 *     1. 获取当前时间 %6 判断 
 *
 * @param {*} [t=new Date()]
 * @returns
 */
const isWeekday = (t = new Date()) => {
    return t.getDay() % 6 !== 0
}