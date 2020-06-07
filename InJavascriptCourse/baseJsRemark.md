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
               if(o.hasOwnProperty[prop]) continue;  //注解：对象深复制
               o[prop] = p[prop]  
            }
            return o;
          }
        
        2.Object.keys()键
        3.Object.values()值
        4.Object.entries()

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
        var isArray = Function.isArray || function(args) {
          return typeof args === 'object' && Object.prototype.toString(args) === '[object Array]'
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
          4. 通过它们的call(参数)和apply(参数数组)方法调用

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

      记忆能力的函数(momoize)




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
                    3.  同一文件可以定义多个模块

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


###   函数执行顺序  存在同名函数时 
 
       1. 变量声明、函数声明都会被提升到作用域顶处；
       2. 当出现相同名称时，优先级为：变量声明(foo#1) < 函数声明(foo#2) < 变量赋值(foo#3)    
   
 
      

###  http与tcp （http是无状态的）
    
    http
       
        get post请求的区别等

        一些基本的请求字段 标识

    https

       依然通过http来传输，但信息通过TLS协议进行了加密    


    http/2(多路复用)  http/3   
     

    问题：从输入url到页面展示中间发生了什么 (https://www.cnblogs.com/xianyulaodi/p/6547807.html) 解释的非常细致
         1. url输入  
              url组成===>  protocol://hostname[:port]/path/[:parameters][?query]#fragment
         2. dns解析(遵照资源)
              查找顺序： 浏览器缓存-操纵系统缓存-本地host-路由器缓存-ISP DNS缓存--顶级dns
         3. tcp连接
             浏览器向web程序80端口发起tcp的连接请求
             三次握手
         4. 发送http请求
              客户端向服务器发起http请求
         5. 服务器处理请求
               tcp报文进行处理 http协议进行解析
         6. 服务器响应请求
                返回一个http响应
         7. 浏览器解析渲染页面
                浏览器解析HTML 构建DOM树  回流重绘 
         8. 连接结束 页面展示
               默认保持请求 


      tcp 三次握手 （建立连接）

          1. 客户端给服务端发送一个SYN报文 (第一次由浏览器发起 告诉服务器要发送数据了)
          2. 服务端接收到SYN报文后，会答应一个SYN+ACK报文 (由服务器发起 要接受数据了 你准备发送数据吧)
          3. 客户端收到SUN+ACK报文后，会回应一个ACK报文  (由浏览器发起 告诉服务器 马上发送数据 准备接受)


     tcp 四次挥手 (断开连接)

          1. 客户端发送一个FIN报文后，报文会指定一个序列号，客户端处于FIN_WAIT1状态 (第一次挥手 由浏览器发起 告诉服务器东西发送完毕(请求报文) 准备关闭)
          2. 服务端接收到FIN后，会发送ACK报文 (z服务端发起 告诉浏览器 我东西接受完了(请求报文) 准备关闭 )
          3. 如果服务端也想断开连接，和服务端的第一次挥手相同，发给FIN报文 (服务器发起 告诉浏览器 资源发送完毕(响应报文) 准备关闭)
          4. 客户端收到FIN后，一样发送一个ACK报文作为应答，此时客户端处理TIME_WAIT状态 (由浏览器发起 告诉服务器 资源快接受完毕 准备关闭(响应报文) 准备关闭 )         
       


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
     2. 分治算法 （拆分最小模块）
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

         闭包的应用场景 
             回调函数
             封装变量--达到共享的目的


###   javascript垃圾回收

          垃圾回收机制
             1. 引用计数(现代浏览器不再使用)
             2. 标记清除
         
         weakSet和weakMap不计入垃圾回收机制


###  判断是否是数组
         1. Object.prototype.toString.call()   常用语判断浏览器内置对象
         2. instanceof    通过判断对象的原型链上是否能找到类型的prototype
         3. Array.isArray()  es5新增的方法 判断对象是否为数组 


###   前端加密场景与实现
         

###   setTimeout  Promise Async/Await


###  call apply bind
        
       apply方法接受两个参数 一个是作用域 一个是参数(可以是数组，也可以是arguments对象)
      call 必须明确传入每一个参数  

      bind的时候传的参数会预先传给返回的参数,调用方法时可以不用传参数，bind方法会创建一个新的函数，当被调用的时候，将其this关键字设置为提供的值，必须手动调用。


###   判断对象类型
         Object.prototype.toString.call(xx)  ====  [object type(类型)]



###   如何优化打包速度
           减少文件搜索范围
           babel缓存编译
           webpack4默认压缩并行


###   网络请求
         关注点    
               入参
               协议
               跨域
               异常处理

         ajax
             new XMLHttpRequest()
                  函数 （open send abort(终止) setRequestHeader getRequestHeader ）
                  事件 （onreadystatechange onload）
                  属性 （readyState status  responseType response withCredentials）
                  异常  （onerror ontimeout ）   

         fetch （ajax替代者）
               方法 （method headers body mode cache redirect）
               辅助 （Request Response Headers）


###   js中不改变原数组的方法
            concat 
            join
            toString
            slice  

      es6中不改变原数组的方法
            some
            filter
            reduce
            map 
            every    


###  jsonp的原理
        json with padding的简称，它是一个非官方协议，他允许在服务器端继承Script tags返回客户端，通过javascript callback的形式实现跨域。  创建一个回调函数，然后在远程服务商调用这个函数并且将json数据作为参数进行传递，完成回调。 



###   详解javascript中event loop机制
          js为一门单线程的非阻塞的脚本语言，单线程意味着在代码执行的任何时候，都只有一个主线程来处理所有的任务。非阻塞则是当代码需要进行一项异步任务的时候，主线程会挂起这个任务，然后在异步任务返回结果的时候在根据一定规则去执行相应的回调。 

          任务分为同步任务和异步任务 
             异步任务又分为宏任务和微任务     



###     git merge 与 git rebase 

           merge将两个分支合并提交为一个新分支，并且新提交有两个parent
           rebase会取消分支中的每个提交，并把它们临时存储，然后把当前分支更新到最新的origin分支，然后再把所有提交应用到分支上




###     原型以及原型链相关问题 
            prototype
            _proto_
                       




###   前端性能优化相关部分

        分析这个过程   根据输入url到页面加载完毕 分析从前到后的一个原理  
             A. DNS解析
             B. TCP连接
             C. HTTP请求抛出
             D. 服务端处理请求 HTTP响应返回
             E. 拿到响应数据 解析响应内容，吧解析的结果展示给用户



         A.  网络层面  减少请求次数和请求的体积
         B.  浏览器端层面   
               1. 资源加载优化
               2. 服务端渲染
               3. 浏览器缓存机制
               4. DOM树构建
               5. 网页排版和渲染过程
               6. 减少回流重绘    
               7. webapck按需加载
               8. CDN回流 静态资源分发
               9. css的查询规则
               10. 减少DOM操作



###   promise解析
         解决嵌套回调的问题
         promise是异步编程的解决方案
         promise.race 类方法 多个promise任务同时执行的时候，返回最新执行结束的Promise任务的结果，不管这个promise结果是成功还是失败
         promise.all 类方法 同时执行多个Promise 如果全部成功执行 则以数组的方式返回所有任务的执行结果 如有一个Promise任务reject 则只能返回rejected任务的结果






###    this指向问题 (根据他的绑定方式来决定 之前记得 好久没看又忘了)
           
           1. 作为对象的方法调用     this指向该对象
           2. 作为普通函数调用       this指向全局对象即window
           3. 构造器调用            this指向返回的这个对象
           4. Function.prototype.call以及Function.prototype.apply调用   this指向分几种情况 1.不传 执行window对象 2.传递另一个函数名 指向这个函数的引用 3. 字符串 数值 指向引用的包装类型


###     提升  
            函数先提升 然后才是变量提升



            vuex 
               stste    存储数据 存储状态
               getter  类似于store的计算属性
               mutation  更改vuex中store的状态 唯一提交方式是mutation
               action  异步操作
               module 模块化




###   解决一个问题的清晰思路

        1.  真实场景
        2.  边界问题
        3.  兼容性问题
        4.  扩展性
        5.  性能问题  大规模访问下的最优解




###    prototype与_proto_

        _proto_是每个对象都有的属性 prototype是函数才会有的属性
        _proto_指向的是当前对象的原型对象，prototype指向的是以当前函数作为构造函数构造出来的对象的原型对象



###    class
         static静态方法不会被实例继承 而是直接通过类来调用 
         extends继承机制





###    前端安全相关内容
  
            XSS:  跨站脚本攻击 
               解决办法: 在cookie中设置HttpOnly 
                        对用户的输入数据进行过滤


            iframe标签风险
               解决办法: H5中iframe提供了sandbox属性 可以对iframe标签的行为加以限制


            csrf:  跨域请求伪造，利用cookie，冒用用户身份，执行违背用户一员的操作或请求
                 解决方案： 验证码
                          携带Token验证
                          logId




###   正则相关
       
            创建正则的方式  
                A. var reg1 = /表达式部分/
                B. var reg2 = new RegExp('表达式')

            常见的正则匹配模式以及规则   



###   DOM类型



###   设计模式相关
         
                                |──工厂模式
    |                           |──单例模式
    │           ├─ 创建型模式     |──原型模式
    │                            |──建造者模式
    │─ 设计模式                  
    |                            |──适配器模式
    │                            |──装饰者模式
    ├           ├─ 结构型模式     |──代理模式
    ├                            |──享元模式
    ├           
    ├           ├─ 行为型模式     |──策略模式
    ├                            |──策略模式
                                 |──中介者模式






###   缓存相关问题  
        强缓存 
        协商缓存






###  js跨端开发
        1. 桌面程序  electron 
            用html css js构建跨平台桌面应用程序的开源库，electron通过将chromium和node.js合并到同一个运行时环境，并打包。
            electron分为两种进程，主进程和渲染进程。    





###  版本控制  
        
         git 
            
            1. 版本回退  
                    a. git reset  (可添加不同的参数  --mixed  --soft（文件回退到暂存区）  --hard（文件回退到修改前）)
                    b. git revert
                    c. git checkout
      
      

            
    
       


          
      
          
                          

                         





          

         






                          
                 
           




     
     






     









          






   








         






                


               




              

              


               







   











        
                        






         





    





             




       



      




