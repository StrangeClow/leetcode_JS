/**
 *   对象深复制
 *
 * @param {*} obj
 * @returns
 */
const deepClone = (obj) => {
    let clone = Object.assign({},obj)  //  先浅复制一份当前对象 不影响源对象
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

let a2 = [1,2,3,4,5,[9],8,77]

console.log(deepClone(a));
console.log(deepClone(a2));

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
 * 
 * 1. 处理边界情况及特殊情况
 * 2. 判断复杂数据类型为对象还是数组
 * 3. 
 * 
 * 
 */
function deepCloneTwo(source) {

   //如果当前source不是一个对象则返回自身
   if(typeof source !== "Object" && source == null) {   
         return source
   }
   // 当前数据是否为数组
   var target = Array.isArray(source) ? [] : {}
   console.log('target类型===>',target);
   for (var key in source) {    // 循环对象的属性
      console.log('key(拿到属性名)===>',key);
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
   console.log('原始a===>',a);
   return target
}



console.log('deepCloneTwo对象===>',deepCloneTwo(a));
console.log('deepCloneTwo数组===>',deepCloneTwo(a2));



const deepClone5 = function(obj) {

   let objType = obj.constructor.name.toLowerCase()
   console.log(objType);
   
   let resObj ={}

   if(objType == 'array') {
      // 
   }
   
   if(objType === 'object') {
     //
   }

}



console.log(deepClone5(a));
console.log(deepClone5(a2));