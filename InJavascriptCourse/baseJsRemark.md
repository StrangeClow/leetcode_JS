### 对象
    
    创建对象
       1. 对象字面量
       2. new 构造函数
       3.  Object.create

    访问对象属性    属性=名字+值+特性
       1.  .操作符
       2.  ['属性名']  object['property']    关联数组或散列 字典 映射

    继承    （ prototype chain）  
      1. 属性访问错误  短路操作优化判断 aa && aa.bb && aa.bb.length

    检测属性

        1.  in 操作符  左侧属性名  右侧对象  'x' in obj  (检测对象的自有属性或继承属性中是否包含)
        2. hasOwnProperty()   obj.hasOwnProperty('x')    仅检测自有属性 继承属性返回false 
        3.  propertyIsEnumerable()   检测自有属性且可枚举

        4.  ! ==     判断属性是否是undefined 

    枚举属性
        1.  for in (遍历所有可枚举属性 包括自有属性和继承属性 )    
          // eg:
          function merge(o,p) {
            for(prop in p) {
               if(o.hasOwnProperty[prop]) continue;
               o[prop] = p[prop]  
            }
            return o;
          }
        
        2.Object.keys()

    属性的getter和setter    

    属性的特性  设置属性的特性 （Object.defineProperty） Object.getOwnPropertyDescriptor() 只能得到自有属性的描述符
    // 复制属性的特性
      eg:
      Object.defineProperty(Object.prototype,
      'extend',
      {
        writable: true,  // 可写
        enumerable: true,  // 可枚举
        configurable:true,  // 可配置
        value: function(o) { // 值就是这个函数
          var names = Object.getOwnPropertyNames(0)   // 得到所有的自有属性
          for(let i = 0; i <names.length; i++) {   // 循环属性
              if(names[i] in this)  continue;
              // 获取O中的属性的描述符
              var desc = Object.getOwnPropertyDescriptor(o,names[i]);
              // 用它给this创建一个对象
              Object.defineProperty(this,names[i],desc);
          }
        }
      });


    对象的三个属性 

       1.  原型（prototype）
       2.   类 （class）
       3.   可扩展性 （extensiable arttribute）


    序列化对象 JSON.parse(转对象)  JSON.stringfly(序列化)  

    对象方法 
        1. toString()
        2. toLocaleString()
        3. valueof()
        4. toJSON()



 ### Array  数组

      创建数组 
         1. []
         2. new Array()

      数组的读写

      稀疏数组  （包含从0开始的不连续索引）     

      数组元素的添加和删除   push pop   shift  unshift   splice  

      数字遍历   for i    for in    forEach   
        1. 跳过继承的属性  if(!a.hasOwnProperty(i))  continue 

      数组方法  ......

      数组类型 
        1. isArray()        Array.isArray([])  true    Array.isArray({})  false 

        // isArray 
        var isArray = Function.isArray || function(o) {
          return typeof 0 === 'object' && Object.prototype.toString(0) === '[object Array]'
        }           


      类数组对象

         Arguments对象
         
           