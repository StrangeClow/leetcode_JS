# <font color=red>核心概念</font> 


    ##  入口(entry)
            单入口： 
            多入口： 多页面应用程序
       



    ##  输出(output)  (new HtmlWebpackPlugin)
             单输出
             多输出



    ##  loader （loder的执行顺序从后往前）
           css 
           html
           js 
           ...



    ##  插件(plugins) （具有apply方法的javascript对象）




    ##  模式(Mode) 模式指示webpack使用相应模式的配置 
         
         development

         production



    ## 开发服务器(devServer)     


    ## 环境变量
        process.env.NODE_ENV ='production'



    ## devtool 映射源代码信息 （source map）


    ## 缓存(cache) cacheGroups(缓存分组)
       babel缓存
          cacheDirectory: true
       文件缓存
          hash: 每次webapck打包会生成唯一的hash值


          chunkHash: 根据chunk生成的hash值，如果打包来源于同一个chunk，那么hash值就相同  


          contenthash:  根据文件内容生成hash值，不同文件hash值一定不一样 





     ##  tree-shaking（去除无用代码）
           前提： 1. es6模块化 2.production模式



     ### 加载(懒加载/预加载)    


     ###  抽离公共代码部分 （splitChunks）


     ## externals(引入其他的类库或者API)  



     ##. 构建过程
            递归解析Entry依赖的所有Module




     # 创建webpack插件

           1. 插件构成
                 a. 具名javascript函数
                 b. 函数原型定义apply方法
                 c. 指定初级到webpack本身的事件钩子
                 d. 操作webpack内部的实例
                 e. 调用webpack提供的callback回调


#  优化webpack构建速度

           1. 优化babel-loder
           2. IgnorePlugin
           3. noParese
           4. happypack





##  es6中module和commonjs区别

        A. ES6静态引入 编译时运行
        B. commonjs动态引入 执行时运行

   

                     









