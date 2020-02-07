### react-intro
    
    virtual DOM

    UI

    jsx(JXS stands for javascript XML)

    Components

    props(props help components to converse with eachother)

    state

    Jsx-----Components-----Props-----State----LifeCycle-----Events----Refs----Keys

    LifeCycle (initial  update props-change   unMounting)

    INITIAL PHASE(getDefaultProps() =====> getInitialState() ====>  componentWillMount() ====> render() =====> componentDidMount())




![avatar](https://github.com/StrangeClow/leetcode_JS/blob/master/ImgAblum/props.png)


### dva结构 组合





## 规范相关

    eslint(Airbnb)
    EditorConfig(编辑器配置文件)
    

##  react源码相关(看书记录)
    当卸载组件时，ReactDOMComponent会：
*  卸载子节点
*  清除事件监听
*  清空相关标识
*  ....

## 生命周期
 * 有限状态机（组件）
 * 首次挂载组件 结合上面md
 *   !!!   当使用 ES6 classes 构建 React组件时，static defaultProps = {} 其实就是调用内部的 getDefaultProps 方法，constructor 中的 this.state = {} 其实就是调用内部的 getInitialState 方法。
 *   无状态组件


## setState机制

*  this.state访问state
*  this.setState更新state
*  setState异步更新（队列机制更新）


## diff算法
* 调和
* tree diff
* component diff
* element diff


## React Patch方法
* patch(将tree diff计算后的DOM差异队列更新到真实的DOM节点) 遍历差异队列

## redux应用（可预测的状态容器）
    redux三大原则
      ** 单一数据源
      ** 状态是只读的
      ** 状态修改均由纯函数完成

    核心API 
       ** createStore(reducers[,initialState])   
    
    createStore创建store对象
       ** getStore(获取当前store状态)
       ** dispatch(分发action)
       ** subscribe(监听变化)
       ** replaceReducer(更新当前仓库的reducer)

    react-redux(与react绑定)

    redux异步流

      ** redux-thunk
      ** redux-promise
      ** redux-composable-fetch

      ** redux-saga



    复杂异步流

        1. 短连接
        2. 轮询
        3. 多异步串联请求



## redux与组件

    容器型组件


    展示型组件


##  redux运用

    高阶reducer (根据perviousState和action计算出新的state)

    借用外部工具库

    redux性能优化



##  解读redux 

    cretaeStore   (reducer, initialState, enhancer)

    初始状态以及getState

    subscribe

    dispatch 

    replaceReducer


##  react-redux

       provider  (接受store作为props)  // 创建全局store

       connect  (mapStateToProps  mapDispatchToProps  mergeProps  options )   (难点 参数可变性)

       combaineReducers


### react-hooks （对比之前状态相关信息） v16.8+ （解决复用组件难的问题）

     useState()   声明状态变量
        为函数组件引入状态
     useEffect()
     useReducer()
        action钩子 引入reducer函数
     useContext()
         共享状态



### dva umi(阿里中台应用解决方案)

        umi 类路由对象
        dva 封装redux与redux-saga的数据流方案


### redux原理

      1. action 把数据从应用传到store的载荷，它是store的唯一来源。通过store.dispatch()将action传入到store
      2. reducers指定了应用状态的变化如何响应到actions并发送到store
      3. store就是把action和reducer联系到一起的对象，store本质上是一个状态数，保存了所有对象的状态。
      4. provider其实就是一个外部容器，他的作用是配合connect来达到跨层级数据传递。
      5. connect的作用是连接react组件与Redux store，它包含我们的容器组件的外一层，他接收上面的Provider提供的store里面的state和dispatch，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件。



###   diff算法 
          深度优先遍历
          patch更新机制



###    React Fiber

         react16中新的协调引擎或重新实现核心算法，他的主要目标是支持虚拟dom的增量渲染。



###   ant design pro中台设计方案





###  组建传值

      props 

      context (provider customer)

      路由传参

      ref属性

      redux

      mobx




###   ant design pro
   
      ts版




### <font color=red>mobx</font>  

    State(状态)

    Derivations(衍生) 
         细分： computed values（计算值） 
               Reactions (反应)

    Actions(动作)



    API总解 

       装饰器 
          @observable
          @action 
          @observer  
          @computed  创建计算属性





## <font color=red>react-router</font> 
      
      <BrowserRouter> 
           basename 基准url 
           forceRefresh 是否刷新整个页面
           getUserComfirmation 用于确认导航的函数 



      <hashRouter>   使用url的hash部分


      <Link>  声明式 可访问的导航链接 
         to string/object      链接地址


      <NavLink>  添加特殊的样式 


      <Prompt>  跳转链接之前 给予用户相应的提示信息


      <MemoryRouter>  将url的历史记录保存在内存中


      <Redirect>  导航到一个新的位置 




      <Route>  在其path属性与某个locaiton匹配时呈现一些UI

          router render methods     Route渲染内容有一下几种方式 
            1. <Route Component>
            2. <Route Render>
            3. <Rroute Children>

          router props     三种渲染方式都将提供三种相同的路由属性 
            1. match 
            2. location
            3. history

         
          path  任何有效的url路径

          exact 如果为true 只有在path完全匹配location.path时才匹配

          sensitive 匹配时将区分大小写
          


     <Router>      所有route通用的低阶接口



     <Switch>  用于渲染与路径匹配的第一个子<Route>或<redirect>


     <withRouter>   将一个组件包裹进route里面 






## <font color=red>redux</font> 

   action 

   reducer

   dispatch

   store

     


        














      
          



 
          


       





    



