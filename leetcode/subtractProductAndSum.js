/**
 *  整数的各位积和之差 
 *
 * @param {*} n
 * @returns
 */
const subtractProductAndSum = function(n) {
    
    n = String(n).split('')

    let add = 0    // 初始和
    let product = 1  // 初始积


    for(let index in n) {
       n[index] = parseInt(n[index])

       add += n[index]

       product *= n[index]
    }

    return product - add     //  累加乘积 - 累加之和 
}

console.log(subtractProductAndSum(234))



const subtractProductAndSum2 = function(n)  {
   if(!n || typeof n !== number)  return false
   
   

}