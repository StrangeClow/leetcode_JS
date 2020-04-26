/**
 *  交换数字  
 * 
 * 编写一个函数，不用临时变量，直接交换numbers = [a,b]中a与b的值 
 * 
 * 
 *
 * @param {*} num
 * @returns
 */
const swapNumber = function(num) {

  //  直接拿数组API用 
  return  num.reverse()


}


/**
 *
 *
 * @param {*} num
 * @returns
 */
const swapNumber2 = function(num) {
  
  //es6解构赋值交换变量
  return [num[1],num[0]] = [num[0],num[1]]
  
}