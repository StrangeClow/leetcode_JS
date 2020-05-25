/**
 *   求 1+2+...+n ，要求不能使用乘除法、
 * for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 *
 * @param {*} number
 * @returns
 */
const sumNums = function(number) {
   
    // 递归调用 
    return number > 0 && (number + sumNums(number - 1))
    

}



console.log(sumNums(3));




// this的四种绑定规则

//  1. 默认绑定
//  2. 显示绑定
//  3. 隐式绑定
//  4. new绑定          

function fn() {
    this.a = 2
    return 
}

let test1 = new fn()
console.log('test1',test1);