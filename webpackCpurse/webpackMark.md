# <font color=red>核心概念</font> 


    ##  入口(entry)
        
       



    ##  输出(output)
        




    ##  loader
           css 
           html
           js 
           ...



    ##  插件(plugins)




    ##  模式(Mode) 模式指示webpack使用相应模式的配置 
         
         development

         production



    ## 开发服务器(devServer)     


    ## 环境变量
        process.env.NODE_ENV ='production'



    ## devtool 映射源代码信息 （source map）


    ## 缓存(cache)
       babel缓存
          cacheDirectory: true
       文件缓存
          hash: 每次webapck打包会生成唯一的hash值


          chunkHash: 根据chunk生成的hash值，如果打包来源于同一个chunk，那么hash值就相同  


          contenthash:  根据文件内容生成hash值，不同文件hash值一定不一样 





     ##  tree-shaking（去除无用代码）
           前提： 1. es6模块化 2.production模式



     ### 加载(懒加载/预加载)    


     ## externals(引入其他的类库或者API)  









