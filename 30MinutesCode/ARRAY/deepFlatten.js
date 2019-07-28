/**
 *  扁平化数组 
 *
 * @param {*} arr
 */
// const deepFlatten = arr => {
//     // [].concat(...arr.map((item,index)=> {
//     //     Array.isArray(item) ? deepFlatten(item) : item
//     // }))
//      [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// }

const aa = function(arr) {
    if(Array.isArray(arr)) {
        console.log('hhhha');
    }
}
 const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

 console.log('变种扁平化数组==>',aa([1, [2], [[3], 4], 5]));
console.log(deepFlatten([1,[9,[88,[485]]], [2], [[3], 4], 5]))
    