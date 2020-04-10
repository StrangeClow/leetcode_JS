/**
 *   对象深复制
 *
 * @param {*} obj
 * @returns
 */
const deepClone = (obj) => {
    let clone = Object.assign({},obj)  //  先浅复制一份当前对象
    Object.keys(clone).forEach((key)=> {
       clone[key] = typeof obj[key] === 'object' 
       ? deepClone(obj[key]) 
       : obj[key]
    })
    return Array.isArray(obj) && obj.length
     ? (clone.length == obj.length) && Array.from(clone)
     : Array.isArray(obj)
     ? Array.from(obj)
     : clone
}


let a = {
   name: 'vs code',
   age: 4,
   sex: 0,
   type: undefined,
   getName() {
      console.log('my name is ')
   },
   b: {
      prov: 'hello',
      getProv(provInfo) {
        console.log(provInfo);
      }
   }
}

console.log(deepClone(a));

// 此方法值克隆简单对象
const deepClone3 = function(obj) {
   return JSON.parse(JSON.stringify(obj))
} 

console.log(deepClone3(a))

console.log(a.age +1)

console.log(Object.assign({},a))



/**
 *
 *
 * @param {*} source
 * @returns
 */
function deepCloneTwo(source) {

   //如果当前source不是一个对象则返回自身
   if(typeof source !== "Object" && source == null) {   
         return source
   }
   // 当前数据是否为数组
   var target = Array.isArray(source) ? [] : {}
   for (var key in source) {    // 循环对象的属性

      // 若当前数据有指定属性 
      if(Object.prototype.hasOwnProperty.call(source,key)) {
         if(typeof source[key] == "Object" && source[key] !== null) {
            target[key] = deepCloneTwo(source[key])
         }
         else {
            target[key] = source[key]
         }
      }
   }
   return target
}