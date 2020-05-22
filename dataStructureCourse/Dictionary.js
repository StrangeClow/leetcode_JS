/**
 *  字典是以[键，值]的形式来存储元素，字典也称作映射
 *
 */
function Dictionary() {

   let  hashObject = {}
   
   this.has = function(key) {
      // in操作符  
      return key in hashObject
   }

   this.set = function(key, value) {
      // 设置值    对象的[]访问属性
     //  hashObject.key = value 
      hashObject[key] = value
   }

   this.remove = function(key) {
       // 当前对象中存在某属性key
       if(this.has(key)) {
          // 删除对象的某个属性  
          delete hashObject[key]
          return true
       }
       return false
   }

   this.get = function(key) {
        // 三元表达式来若存在当前key 则取出  否则undefined
        return this.has(key) ? hashObject[key] : undefined
   }

   this.size = function() {
       // Object.keys(obj).length
       return Object.keys(hashObject).length
   }

   this.getObjects = function() {
       return hashObject
   }

   this.getValues = function() {
       var tempValues = []
       // for in循环 
       for(let k in hashObject) {
          // 存在某属性 
          if(this.has(k)) {
              tempValues.push(hashObject[k])
          } 
       }
       return tempValues
   }

}


let a = [
    {
        name: 'hello',
        age: 18,
        address:'new york'
    },
    {
        name: 'world',
        age: 74,
        address:'tokyo'
    },
    {
        name: 'lajksd',
        age: 39,
        address:'france'
    },
]



let d = new Dictionary()

d.set('hello',19)

console.log(d.getValues());
console.log(d.has(a));



function test() {
    message = 'hello world'    // 声明变量时 省略var 
    console.log(message);
    return message
}
console.log(test());
console.log(message);   // 非严格模式下不会报错 


console.log(null === undefined);
console.log(null == undefined);  // 强制类型转换



// 前置递增递减
// 后置递增递减


// 可选动态参数
function test1 (...args) {

}



//  concat()  slice()不会更改原始数组  相当于复制一个当前数组的副本   

//  splice()的用法  三个参数 