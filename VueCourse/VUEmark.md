### vue-information
    
    基础语法

    slot 扩展插槽

    render 

    组件化(封装 export属性 方法)

    form表单

    指令(自定义指令) v-directive



### vuex

    State (mapState) // 单一状态树

    Getter (mapGetters)  // 所有组件的computed属性 getters的返回值会根据他的依赖被缓存起来 

    Mutation(Commit)  // store中的methods mutations对象中保存着更改数据的回调函数type，的一个参数是state,第二个参数是载荷payload,即自定义参数，调动mutations中回调函数，只能使用store.commit(type, payload) 
```
   mutations: {
       increment(state) {
           // 变更当前commit状态
           state.count++
       }
   }

   // 显式提交mutations
   store.commit(mutations)
```

    Action(分发)  // action类似于mutation 不同在于action提交的是muation 而不是直接更改状态  Action可包含任意异步操作  Action通过store.dispatch()
```
   mutations: {
       increment(state) {
           // 变更当前commit状态
           state.count++
       }
   }

  actions: {
      increment(context) {
          context.commit('increment)
      }
  }
```
    Module(分割模块化)  // 将store分成模块 





### <font color=red>vue.js 运行机制</font> 

    new Vue  ===>  调用_init函数初始化 
       (在此阶段会初始化  生命周期，时间，props,methods,data,computed与watch ) 
       最重要的是通过Object.defineProperty设置setter与geeter 

    初始化后调用$Mount挂载组件

### 编译
      parse(解析template模板  形成AST(抽象语法树))

      optimize(标记static静态节点 不更新当前标记部分 节约性能)

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


###   自定义全局函数
        
        vue.prototype.someThods = function() {}
   


###  vue组件化


     prop (可配置属性)

       1.  props为对象最佳 表示组件接收的参数 可对每个属性设置类型 默认值或自定义校验属性的值 

     event (自定义事件)
       
       1. $emit触发

     slot (分组组件的内容)

       1.  具名slot 动态插入内容或组件 

     
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

    new Proxy()代理

     vue3.0的响应式用法
         reactive包装数据
             reactive()为目标对象创建一个proxy对象
         effect定义数据变化后的回调  reflect


      内部相关
      对比vue2的区别
      ts



###   组件传值  
      
       父-子  props
       子-父  $emit
       兄弟组件  bus  vuex
       跨级组件  provide/inject
       缓存   storage类
       实例   refs


###   vue-router
        
        路由模式
             hash模式 仅hash(#)前面的内容会被包含在请求中 不会出现404的错误
             history模式 前端url必须与实际向后端发起请求的url一致 否则出现匹配不到的情况 

        动态路由  addRoutes()  进入系统前 动态获取用户菜单

        路由传参(两种) 
     
        导航守卫(router.beforeEach ......)

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

            const store = new Vuex.Store({})

            全局注入store对象，来实现组件间的状态共享




###   vue中绑定表现形式
       
       数组形式
       对象形式 



###    组件化  

           通用组件  
           单一组件  向外暴露参数信息




###     重点  
           1. 组件化
           2. 响应式
           3. vdom和diff
                 a.vDom ===>用js模拟dom结构，计算出最小变更，操作dom
                    A. h
                    B. Vnode
                    C. patch
                    D. key
                    E. ......


                 b.diff算法总结（同层的树节点 时间复杂度为O(n)）
                     A. patchVnode
                     B. addVnodes removeVnodes
                     C. updateChildren（更新时key的比较）
                 
                 c. diff流程拆分
                     A. 对新旧节点进行标记
                     B. 循环对新老节点进行比较并移动对应的VNode节点 
                     C. 循环结束后，根据新老节点的不同，作相应的节点的添加或删除
           4. 模板编译
            
                compile编译

           6. 渲染过程
                
                初次渲染过程
                    解析vue模板为render函数
                    触发响应式 设置data属性 生成getter
                    执行render函数 生成Vnode节点

                更新过程
                    修改data 触发setter  
                    重新执行render 生成新的newVode节点
                    patch(Vnode, newVode)

   
           7. 前端路由






###     vue双向绑定原理   

             1. 实现一个监听器Observer    
                  obj.defineProperty()给属性加上setter和getter

             2. 实现一个解析器Compile
                  解析vue模板指令 初始化渲染页面

             3. 实现一个订阅者Watcher
                  订阅者连接Obsever和Complie

             4. 实现一个订阅器Dep
                  采用发布-订阅设计模式 




###     vue中插件机制


###     父子组件调用相关
              组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。
              组件的销毁操作是先父后子，销毁完成的顺序是先子后父



###     computed filter mixin

            computed
               计算属性 可动态class
            filter
               过滤器 自定义
            mixin
              公用方法 混入
            





      


        


         


          

          



     





   

    


