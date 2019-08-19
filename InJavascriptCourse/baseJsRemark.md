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
         



### 类和模块

        类继承   

        类和类型
           1. instanceof  左操作数是待检测其类的对象 右操作数是定义类的构造函数
           2. constructor
           3. 鸭式辨型


###  函数

       函数调用
          1. 作为函数
          2. 作为对象的方法
          3. 作为构造函数
          4. 通过它们的call()和apply方法调用

      形参 实参    （参数多余三个形参 包装为对象 )

      caller callee (严格模式无效)

      自调用

      闭包

      高阶函数（操作函数的函数）

      记忆能力的函数




###   客户端web应用的生命周期

      1. 用户输入url
      2. 生成请求并发送至服务器
      3. 执行动作获取资源 将结果返回到客户端
      4. 处理html css js 并构建结果页面
      5. 监控事件队列 处理其中的事件
      6. 与页面元素交互
      7. 关闭web应用  生命周期结束



###   理解函数

      定义与参数 
         
         实参与形参

            形参是在函数定义时指定的
            实参为函数函数调用是所传给函数的值

        剩余参数

        默认参数



      立即执行函数 IIFE（      (fucntion(){})(3)      ）  
          变种方式    1. +function(){}()
          变种方式    2. -function(){}()
          变种方式    3. !function(){}()
          变种方式    4. ~function(){}()


      函数调用
           函数调用的隐含参数 arguments和this  
             arguments 传递给函数的所有参数的集合（实现类似函数重载的特性） 对比es6的剩余参数rest rest参数是真正的Array实例
           调用函数的不同方式
           处理函数上下文的问题 


      箭头函数   =>


      course====context
        生成器和promise
        async await



### 对象与原型

       原型

       函数作为构造器

       原型扩展对象

       继承创建类

###  控制对象的访问

       getter setter

       代理 proxy  (es6)


###   正则

          正则表达式(格式)
          匹配规则


### 模块化
   
        AMD(基于浏览器)

           define函数  
              优势： 1.  自动处理依赖
                    2.  异步加载
                    3.   同一文件可以定义多个模块

        CommonJS(面向通用javascript环境 nodejs)

           1. MouseCounterModule

        es6模块
             export

             import    


###    浏览器

          DOM操作
               Attribute
               Property
               防抖
                   浏览器重排 重绘

          事件（event）   js单线程模型
            1.  事件循环
                A. 一次处理一个任务
                B. 事件队列  
                      a.   宏任务
                      b.   微任务
            2.  计时器处理复杂任务
                A.  浏览器挂起
            3.  事件冒泡和委派
                A.   委派到上一层节点
            4.  自定义事件 （参见其他）
                 A.  松耦合  



### 跨浏览器

        渐进增强  优雅降级

        回归 

        特性检测和polyfill



###  http与tcp
    
    http
       
        get post请求的区别等

        一些基本的请求字段 标识

    https

       依然通过http来传输，但信息通过TLS协议进行了加密    


    http/2(多路复用)  http/3   
     

    问题：从输入url到页面展示中间发生了什么
         1. url输入  
              url组成===>  protocol://hostname[:port]/path/[:parameters][?query]#fragment
         2. dns解析(遵照资源)
              查找顺序： 浏览器缓存-操纵系统缓存-本地host-路由器缓存-ISP DNS缓存--顶级dns
         3. tcp连接
             浏览器向web程序80端口发起tcp的连接请求
             三次握手
         4. 附送http请求
              客户端向服务器发起http请求
         5. 服务器处理请求
               tcp报文进行处理 http协议进行解析
         6. 服务器响应请求
                返回一个http响应
         7. 浏览器解析渲染页面
                浏览器解析HTML 构建DOM树
         8. 连接结束 页面展示
               默认保持请求 


      tcp 三次握手 （建立连接）

          1. 客户端给服务端发送一个SYN报文
          2. 服务端接收到SYN报文后，会答应一个SYN+ACK报文
          3. 客户端收到SUN+ACK报文后，会回应一个ACK报文     


     tcp 四次挥手 (断开连接)

          1. 客户端发送一个FIN报文后，报文会指定一个序列号，客户端处于FIN_WAIT1状态
          2. 服务端接收到FIN后，会发送ACK报文
          3. 如果服务端也想断开连接，和服务端的第一次挥手相同，发给FIN报文
          4. 客户端收到FIN后，一样发送一个ACK报文作为应答，此时客户端处理TIME_WAIT状态         
       


### UDP（面向无连接 不需要再正式传递数据前线连接双方）





        
                        






         





    





             




       



      




