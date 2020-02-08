/**
 *
 *
 * @param {*} date
 */
const dayOfYear = date => Math.floor(date - new Date(date.getFullyeaar(),0 ,0) / 1000/ 60 /60 /60 / 24)