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


## react-router

    声明式路由



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

       provider  (接受store作为props)

       connect  (mapStateToProps  mapDispatchToProps  mergeProps  options )   (难点 参数可变性)


### react-hooks （对比之前状态相关信息）

     useState
     useEffect



### dva umi(阿里中台应用解决方案)

        umi 类路由对象
        dva 封装redux与redux-saga的数据流方案


### redux原理

      1. action 把数据从应用传到store的载荷，它是store的唯一来源。通过store.dispatch()将action传入到store
      2. reducers指定了应用状态的变化如何响应到actions并发送到store
      3. store就是把action和reducer联系到一起的对象，store本质上是一个状态数，保存了所有对象的状态。
      4. provider其实就是一个外部容器，他的作用是配合connect来达到跨层级数据传递。
      5. connect的作用是连接react组件与Redux store，它包含我们的容器组件的外一层，他接收上面的Provider提供的store里面的state和dispatch，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件。


       





    



