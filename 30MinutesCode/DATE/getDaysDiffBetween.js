/**
 *   注意计算规则以及各个参数的要求
 *
 * @param {*} beginDate
 * @param {*} endDate
 */
const getDaysDiffBetween =  (beginDate, endDate) => {
    (endDate - beginDate) / (1000*3600*24)
}