/**
 *     获取两个日期之间相差的天数  
 * 
 *   注意计算规则以及各个参数的要求
 *
 * @param {*} beginDate
 * @param {*} endDate
 */
const getDaysDiffBetween =  (beginDate, endDate) => {
  
  return  (endDate - beginDate) / (1000 * 3600 * 24);
}


 
 console.log(getDaysDiffBetween(new Date('2017-12-13'), new Date('2017-12-22')));