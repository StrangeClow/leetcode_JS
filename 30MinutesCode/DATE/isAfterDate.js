/**
 * 判断一个时间是否在另一个时间后面
 *
 * @param {*} dateA
 * @param {*} dateB
 */
const isAfterDate = (dateA, dateB) => dateA > dateB;


console.log(isAfterDate('2020-01-01','2020-04-16'));
console.log(isAfterDate('2020-01-01','2019-04-16'));