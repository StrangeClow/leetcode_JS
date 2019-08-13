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

