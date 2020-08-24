/**
 *   根据某一属性返回排序后的对象数组
 *   1. Array.prototype.sort()
 *   2. Array.prototype.reduce()
 *   
 *
 * @param {*} arr  数组对象
 * @param {*} props
 * @param {*} orders   升序降序
 */

// function aa(a,b) {
//   return a + b
// }
 
// function bb() {
//     return aa(1,2) + 100
// }

// console.log(aa(7,8));
// console.log(bb());

function orderBy(arr, props, orders) {

 
    [...arr].sort((a, b) =>
   
    props.reduce((acc, prop, i) => {
        console.log('acc-prop====>',acc,prop);
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        console.log('p1==p2',p1,p2);
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    },0)
  );
}


const users = [
    {
        name: '张三',
        age: 18,
        senior: '小学'
    },
    {
        name: '李四',
        age: 20,
        senior: '初中'
    },
    {
        name: '王二',
        age: 21,
        senior: '高中'
    },
    {
        name: '麻子',
        age: 23,
        senior: '大学'
    },
]

const orderBy1 = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
        console.log('acc==prop==1====>',acc,prop,i);
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        console.log('p1===p2',p1,p2);
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
        console.log('acc==',acc);
      }
      console.log('计算结果acc==>',acc);
      return acc;
    }, 0)
  );

console.log(orderBy1(users,['name','age']));