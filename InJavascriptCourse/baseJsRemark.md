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

      闭包 (闭包是指有权访问另外一个函数作用域中的变量的函数) 
         1. 是一个函数
         2. 能访问另外一个函数作用域中的变量  

      闭包特性
         1. 闭包可以访问当前函数以外的变量
         2. 即使外部函数已返回，闭包仍能访问外部函数定义的变量
         3. 闭包可以更新外部变量的值

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




###   JS

         数据类型
            原始类型(boolean null undefined number string symbol)
            引用类型(object arr 正则 时间)
              typeof  instanceof
            类型转换
              1. 转Boolean
              2. 转换为数字
              3. 转换为字符串

          this  理解this的指向问题
               1. window
               2. 调用对象
               3. new 当前对象
               4. bind  this为第一个参数

          ==（值 参与类型转换） 与 ===（类型和值）

          闭包相关问题

          浅拷贝
             1. Object.assign()
             2. ... 
          深拷贝
             1. JSON.parse(JSON.stringfy(object))

          原型以及原型链
             1. prototype 显式原型对象
             2. _proto_ 隐式原型对象

          
          let const var 
             声明提升 函数提升 赋值不提升

          原型继承和class继承

          异步相关问题 
             1. ajax回调
             2. promise 
             3. async await
             4. generator
          
          定时器相关问题
             1. setTimeout clearTimeout   
             2. setInterval clearInterval  


          event loop 
             1. 执行栈  （存储函数调用的栈结构  遵循先进后出的原则）


          new
            调用new的过程
              1. 新生成了一个对象
              2. 链接到原型
              3. 绑定this
              4. 返回新对象

         instanceof原理  （通过判断对象的原型链中是不是能找到类型的prototype）


         垃圾回收机制 （进阶）


         浏览器缓存机制相关
             缓存位置
                1. Service Worker
                2. Memory Cache
                3. Disk Cache

             缓存策略
                1. 强缓存  
                     Expires
                     Cache-Control
                2. 协商缓存

         浏览器渲染
               问题1   同时插入几万个DOM节点 实现页面不卡顿
                     eg: requestAnimationFrame
                     eg： 虚拟滚动

            重绘与回流
               重绘（当前节点改变外观 不影响DOM结构）
               回流（几何结构属性发生变化）

        
        安全防范相关
            
            XSS 跨站点脚本攻击

            CSRF 跨站点请求伪造


         JS设计模式相关

         常见数据结构相关内容
            A. 时间复杂度
            B. 空间复杂度
            C. 基本数据结构
                 a. 栈 （先进后出）   （递归的本质为压栈）
                 b. 队列 （先进先出）
                 c. 链表 （线性结构）
                 d. 树
                 e. 并查集（特殊的树结构，用于处理一些不交集的合并及查询问题）
                 f. 堆





### 作用域

       声明提升（函数声明先提升 然后才是变量） 但赋值或其他逻辑不提升

### this 
    
      绑定规则
         A. 默认绑定
         B. 隐式绑定
         C. 显式绑定 call apply
         D. 硬绑定   .bind 
         E. New绑定


### 对象 Object


###  类型

     typeof 检测的结果并不是该变量的类型 而是该变量持有的值的类型

     undefined和is no defined是不同的概念 

     NaN !== NaN

     原生函数
          1. String()
          2. Number()
          3. Boolean()
          4. Array()
          5. Object()
          6. Function()
          7. RegExp()
          8. Date()
          9. Error()
          10. Symbol()

      强制类型转换

      &&和||的返回值并不一定是布尔类型，而是两个操作数其中一个的值
         eg: var a = 42
             var b= "abc"
             var c  = null
         则： a||b ===> 42
             a&&b ===> "abc"

      宽松相等和严格相等
          == 允许在相等比较中进行强制类型转换
          === 不允许在相等比较中进行强制类型转换

      [] == ![]


### 设计模式
    
       单例模式
       享元模式
       观察者模式





###  小程序
      小程序线程
         view线程   （渲染页面部分）
         appServer线程    （执行js部分）  



###  JS继承
         A. 组合继承  （prototype+call） 调用父类构造，继承父类的属性并保留传参，然后通过即开那个父类实例作为子类原型，实现复用
         B. 寄生组合继承
         C. 寄生继承     使用原型链继承获得一个目标对象的浅复制，然后增强这个浅复制的能力
         D. 构造函数继承  (new)  在子类型构造函数中通过call()调用父类型构造函数
         E. 原型链继承   （prototype）   子类型的原型为父类型的一个实例对象 
         F. ES6中extends继承




### 前端数据流
    A.  REDUX
    B.  MOBX
    C.  RXJS

###  前端五大算法
     1. 贪心算法 （局部最优解）
     2. 分治算法 （拆分陈小模块）
     3. 动态规划 （每个状态都是历史的一个总结）
     4. 回溯法   （发现原先的选择不合适时，退回重新选择）
     5. 分支界限法


### new操作符
     新建空对象 -----对象原型指向构造函数的prototype---执行构造函数返回的对象


### 节流防抖
     A. 节流：防止重复操作
     B. 防抖：事件被触发N秒后在执行回调，如果在N秒内又被触发，则重新计算事件


###  BOM(Browser Object Model)
   
      window对象

      location对象

      navigator对象

      screen对象

      history对象


###  DOM (Document Object Model)

       节点类型 

       DOM操作 


###  canvas 


###  Service Worker


###  CSS预编译相关
    
     less

     scss


###  css相关

   BFC（block formating context）  
      1.发生原因  如何解决


   window.getComputedStyle(element, [psudoELT])     // element 要获取计算元素的样式 pseudoELT 指定一个要匹配的伪元素的字符串


   css动画 

   media query

   



###  H5与原生通信
     
     1. App调用H5

     2. H5调用app



###   浏览器的渲染原理

      1. 解析HTML生成DOM树
            DOM树的构建过程是一个深度遍历过程
      2. 生成render树
             根据DOM树渲染树Render Tree
      3. 布局DOM树
             每个节点进行布局处理，确定其在屏幕上的位置
      4. 绘制节点 显示元素布局
      5. 回流与重绘



###  Set Map   WeakSet WeakMap 



###   高阶函数

        curring 
        函数作为参数


###   javascript内存空间

         栈(stack) LIFO  竖向通道
         队列(queue) FIFO   横向通道
              事件循环的基础结构

         基本变量保存在栈中 (undefined null boolean number string symbol)  值不变
         引用类型保存在堆中 (object array date...)   赋值会改变
         常量(常量池 一半归类在栈中)


         闭包中的变量保存在堆(heap)内存中，而不是栈内存，这就是为什么闭包还能引用函数内的变量


###   javascript垃圾回收

          垃圾回收机制
             1. 引用计数(现代浏览器不再使用)
             2. 标记清除
         
         weakSet和weakMap不计入垃圾回收机制


###  判断是否是数组
         1. Object.prototype.toString.call()   常用语判断浏览器内置对象
         2. instaanceof    通过判断对象的原型链上是否能找到类型的prototype
         3. Array.isArray()  es5新增的方法 判断对象是否为数组 


###   前端加密场景与实现
         

###   setTimeout  Promise Async/Await


###  call apply bind
        
       apply方法接受两个参数 一个是作用域 一个是参数(可以是数组，也可以是arguments对象)
      call 必须明确传入每一个参数  

      bind的时候传的参数会预先传给返回的参数,调用方法时可以不用传参数，bind方法会创建一个新的函数，当被调用的时候，将其this关键字设置为提供的值，必须手动调用。


###   判断对象类型
         Object.prototype.toString.call(xx)  ====  [object type]



###   如何优化打包速度
           减少文件搜索范围
           babel缓存编译
           webpack4默认压缩并行
           




     
     






     









          






   








         






                


               




              

              


               







   











        
                        






         





    





             




       



      




