/**
 *  返回一个结介于1-366之间的整数 该整数表示日期时间或表达式中的一年中的连续日期 
 *
 * @param {*} date
 */
const dayOfYear = date => Math.floor(date - new Date(date.getFullYear(),0 ,0) / 1000/ 60 /60 /60 / 24)



console.log('一年中的第几天..',dayOfYear(new Date('2020-02-20')));