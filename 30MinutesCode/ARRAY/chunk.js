/**
 *   数组分区  
 *
 * @param {*} arr
 * @param {*} size
 * @returns
 */
const chunk = function(arr, size) {
    // Array.from  方法从一个类似数组或可迭代对象创建一个新的浅拷贝的数组实例 
     // Array.from(arrlike, [, mapFn(可选，新数组中的每个元素都会执行当前回调函数)[, thisArg(可选参数，执行回调函数mapFn时this对象)]])
    return Array.from({
        // Math.ceil()
        length: Math.ceil(arr.length / size)
    }, (v, i)=> {
        console.log('vv==i==',v ,i)
        // arr.slice() 返回一个数组对象，这一对象是由一个begin和end决定的原数组的浅拷贝，包括begin和end,原数组不会被改变。
        return arr.slice(i * size, i * size + size)
    })
}




let n = [1,2,3,4,5,6,7,8,9,10,11], size = 3

console.log(chunk(n, size))


let n1 = [12,34,56,7,8,9]
console.log(n1.slice(1,4))

let arrLike = [
    {
        name:'a',
        age:12,
        phone: 1334545
    },
    {
        name:'b',
        age:17,
        phone: 8676767
    },
    {
        name:'c',
        age:19,
        phone: 45454545
    },
]

const testArrayFrom =function() {
    return  Array.from(arrLike, (item)=> {
        console.log(item)
        return (item.age * 5, item.phone / 3)
      })
} 

console.log(testArrayFrom())