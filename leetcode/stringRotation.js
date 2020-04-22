/**
 *   字符串轮转
 *    给定两个字符串s1,s2 请编写代码检查s2是否为s1旋转而成
 *
 * @param {*} s1
 * @param {*} s2
 * @returns
 */
const stringRotation = function(s1, s2) {
  
    if(s1.length !== s2.length)  return false

    // 循环比较  
    while() {

    }

}




const stringRotation2 = function(s1, s2) {
   

    if(s1.length === s2.length) {
     //   
     console.log(s1.repeat(2));
     // s2是否存在于s1中
    return s1.repeat(2).includes(s2)    // 复制一次再比较 
    } else  {
        return false
    }
}


console.log(stringRotation2('ab','ba'));
console.log(stringRotation2('waterbottle','erbottlewat'));
console.log(stringRotation2('abcd','dcba'));