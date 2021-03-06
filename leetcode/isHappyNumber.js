/**
 * 快乐数 
 *    定义： 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复
 * 这个过程直到这个数变为1，也可能是无限循环但始终变不到1。如果可以变为1，那这个数就是快乐数
 *
 * @param {*} num
 */

function getSum(n) {
    n = n +''
    let sum = 0 
    for(let num of n) {
        sum += num * num
    }
    return sum
}

const isHappyNumber2 = function(n) {     // hash对象存储出现过的值   若再次出现则表情无限循环  非快乐数 
    let res= getSum(n)

    let obj = {}

    while(res != 1) {
      if(res in obj) {     // 循环对象的属性 
           return false
      }
      obj[res] = 1
      res = getSum(res)
    }
    return true
}

console.log(isHappyNumber2(19));


const isHappyNumber = function(n) {

     let set = new Set()
     let sum = 0
     n = ''
     while(sum !== 1) {
         sum = 0
         for (let index = 0; index < n.length; index++) {
            sum+=n[index] * n[index]
             
         }
         if(set.has(sum))   return false

         n = sum+''
         set.add(sum)
         
     }
     return true
}


console.log(isHappyNumber(1));
console.log(isHappyNumber(2));
console.log(isHappyNumber(3));
console.log(isHappyNumber(19));