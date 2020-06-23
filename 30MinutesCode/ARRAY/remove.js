/**
 *  通过删除给定函数为其返回false的元素来对数组进行突变
 *    移除数组中的元素  
 *
 *  从数组中移除给定函数返回false的元素集合
 * @param {*} arr
 * @param {*} fn
 * @returns
 */
const remove = function(arr, fn) {
   
  //  探查数据是否为数组类型
  if(! Object.prototype.toString.call(arr) === ['object','Array']) {
    return []
  }
  
  // 获取过滤函数之后拿到的数据结合 
  let tempArr = arr.filter(fn)

        //  reduce迭代
 return tempArr.reduce((prev, curr)=> {

      console.log('reduce数据===',prev, curr);
      
      // splice() 方法向数组中添加或删除项目 然后返回被删除的项目  该方法会改变原始数组 

      // splice(a, b, c)   a== 起始位置(必须) b===要删除的项目数量(必须)  c===需要添加的数据(可选)  
      
      // indexOf()  是否存在 
       arr.splice(arr.indexOf(curr), 1)
      
       // concat() 拼接
      return prev.concat(curr)

  },[])





}



console.log(remove([1,2,3,4,5,6,7,8,98], n => n % 2 === 0));