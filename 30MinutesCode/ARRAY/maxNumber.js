/**
 *  取最大值 
 *
 * @param {*} arr
 * @param {number} [n=1]
 */
const maxNumber = (arr, n= 1) => [...arr].sort((a,b)=> b-a.slice(0,n))