/**
 *   根据条件过滤一个人对象数组 同时过滤掉未指定的key
 *
 * @param {*} data
 * @param {*} keys
 * @param {*} fn
 */
const reduceFilter = (data, keys, fn) =>
      data.filter(fn).map(el =>
        keys.reduce((acc,key)=> {
            acc[key] = el[key]
            return acc
        },{})
    )


/**
 *
 *
 * @param {*} data 原数据集合
 * @param {*} keys 数据集合键
 * @param {*} fn  过滤函数
 * @returns
 */
const reduceFilter2 = function(data, keys, fn) {

  // 拿到过滤后的数据信息
  let filterData = data.filter(fn)   // filter过滤函数 fn()

  console.log(filterData);

  return filterData.map((item,index)=> {

    console.log('过滤索引===',index);

    return  keys.reduce((prev,curr)=> {     // keys指代根据某条件过滤
       
        prev[curr] = item[curr]
     
        console.log('prev后',prev[curr],curr);

        return prev

      },{})
   })
}    



const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'bob',
    age: 27
  },
  {
    id: 3,
    name: 'laker',
    age: 38
  },
]    

console.log(reduceFilter2(data, ['id','name'], item => item.age > 24));


console.log(reduceFilter(data, ['id','name'], item => item.age > 24));