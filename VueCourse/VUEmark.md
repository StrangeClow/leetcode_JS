### vue-info
    
    基础语法

    slot

    render 

    组件化(封装 向外暴露属性 方法)

    form表单

    指令(自定义指令)


###  vue-router
     
     动态路由

     路由传参(两种)
     
     导航守卫(router.beforeEach ......)


### vuex

    State (mapState)

    Getter (mapGetters)

    Mutation(Commit)

    Action(分发)

    Module(分割模块化)





### <font color=red>vue.js 运行机制</font> 

     new Vue  ===>  调用_init函数初始化 
       (在此阶段会初始化  生命周期，时间，props,methods,data,computed与watch ) 
       最重要的是通过Object.defineProperty设置setter与geeter 

    初始化后调用$Mount挂载组件

### 编译
      parse(解析template模板  形成AST(抽象语法树))

      optimize(标记statis静态节点 不更新当前标记部分 节约性能)

      generate(将AST转化为render function字符串)


### <font color=red>响应式 </font>       

     getter 被设置的对象被读取的时候执行getter函数
     setter 被设置的对象被赋值的时候执行setter函数

     当render function被渲染的时候，读取对象的值，触发getter函数进行依赖收集
    将观察者Watcher对象存放到当前臂包中的订阅者Dep的subs中

    当值被修改，触发setter setter通知依赖收集得到的Dep中的watcher  update更新视图 


### <font color=red>Virtual DOM </font> 

     Virtual DOM 实际为一棵VNode节点的树 用对象属性来描述节点 

     patch diff算法  比较前后的差异性 


### <font color=red>响应式系统的基本原理 </font> 
     /*
     * obj 目标对象
     * porp 需要操作的目标对象的属性名
     * descriptor 描述符
     */
     Object.defineProperty(obj,prop,descriptor)

     observer（）



    
### <font color=red>依赖收集原理</font>

    Dep订阅者 存放watcher观察者对象  进行依赖收集

    Watcher观察者  更新视图



### <font color=red>VNode节点</font>

    本质为一个javascript对象


### <font color=red>complie</font>

     complie可分为三个阶段

          1. parse  利用正则等奖template解析 得到class style  形成抽象语法树
          2. optimize  标记静态节点
          3. generate   将AST转化为render function

          next得到 
           
           render function



### <font color=red>差异diff patch机制</font>

      diff算法通过同层的树节点进行比较而非对树进行逐层遍历 时间复杂度低

      比较差异 部分更新视图层


### <font color=red>异步更新机制</font>

    setter---Dep---Watcher--Patch---Update

    存入队列中   nextTick原理


### <font color=red>vuex基本原理</font>

   数据的响应式化

   commit  触发mutation

   dispatch  触发action（异步）

   
###  vue组件化


     prop (可配置属性)

       1.  props为对象最佳 

     event (自定义事件)
       
       1. $emit触发

     slot (分组组件的内容)

       1.  具名slot

     
     组件通信 (provide/inject) 类似react的上下文 context   暴露全局 app.vue包裹provide

     findComponents （自行实现组件通信）

       向上找最近的组件

         eg:   
               function findCompoentUpward (context, componentName) {
                 let parent = context .$parent
                 let  name = parent.$options.name
                  while(parent && (!name || [componentName].indexOf(name) < 0)) {     // 是否存在
                     parent = parent.$parent;
                     if(parent) {
                         name = parent.$options.name;
                     }
                  }
                  return parent
               }


### <font color=red>vue构造器</font> 

       extend

       $mount 手动挂载


       vue全局组件

       递归组件 

       动态组件

       $nextTick(有关事件任务调度相关)

       $set  
          A. 数组变动
          B. 对象属性的添加或删除


###  flow  静态类型检查工具


### vue core  course
   
        vue的初始化过程  
           Function实现的class 原型prototype以及本身扩展实现了一系列方法



### vue3.0  

     proxy代理

     vue3.0的响应式用法
         reactive包装数据
             reactive()为目标对象创建一个proxy对象
         effect定义数据变化后的回调

     
###  MVVM


###   组件传值  
      
       父-子  props
       子-父  $emit
       兄弟组件  bus  -vuex
       跨级组件  provide/inject


###   vue-router
        
        导航守卫
           全局守卫
              beforeEach（全局前置守卫）
                  to 代表要进入的目标
                  from 当前正要离开的路由
                  next 需要调用的方法
            
            全局解析守卫
                  router.beforeResolve

            全局后置钩子
                  router.afterEach (不会接受next函数 也不会改变导航本身)      


            路由独享守卫
                 beforeEnter 

            组件内的守卫
                 beforeRouteEnter  （不能访问this  渲染发我组建的对应路由被confirm调用）
                 beforeRouteUpdate  （在当前路由改变，但是该组件被复用时调用）
                 beforeRouteLeave （离开守卫 禁止用户未保存相关信息就突然离开 ）


            导航解析流程
               1. 导航被触发
               2. 调用beforeRouteLeave
               3. 调用全局beforeEach
               4. 重用的组件里调用beforeRouteUpdate
               5. 路由配置里调用beforeEnter
               6. 解析异步路由组件
               7. 被激活的组件里调用beforeRouteEnter
               8. 调用全局beforeResolve
               9. 导航被确认
               10. 全局afterEach钩子函数
               11. DOM更新
               12. 实例调用beforeRouteEnter守卫中传给next的函数     





###     vuex的原理解析
            
            $store




###    vue3相关内容

        内部相关
        对比vue2的区别
        
            





      


        


         


          

          



     





   

    


