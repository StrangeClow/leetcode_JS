/**
 *
 *
 * @param {*} [...arr]
 * @param {number} [n=1]
 * @returns
 */
const sampleSize = function([...arr], n = 1) {
    
    //  while(arr.length) {
    //     // 拿到随机值 
    //     let itemInfo
    //     itemInfo = Math.floor(Math.random() * arr.length--)
    //     // 交换两个变量 
    //     [arr[arr.length], arr[itemInfo]] = [arr[itemInfo], arr[arr.length]]
    //  }
    //  // arr.slice(start, end)
    //  return arr.slice(0, n)

     let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
}



let n1 = [1,2,3], n2 = 2
console.log(sampleSize(n1, n2));