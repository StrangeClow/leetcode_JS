/**
 *    是否是同一天 
 * 
 *      toISOString()
 *
 * @param {*} dateA
 * @param {*} dateB
 */
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString()



console.log(isSameDate('2020-01-01','2020-02-09'));
console.log(isSameDate('2020-01-01','2020-01-01'));


