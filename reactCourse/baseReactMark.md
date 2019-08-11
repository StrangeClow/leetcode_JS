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
