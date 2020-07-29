###     移动端适配问题
          1. 1px问题
          2. 横屏适配
          3. 刘海屏适配
          4. Meta viewport

###     解决方案
           flexible方案(淘宝)
           vh vw方案
           安全区域
           js检测屏幕方向



###     移动端兼容性解决方案  

          vw+rem方案
          媒介查询



###   移动端字体
        
          ios系统
          android系统  两个系统的默认字体不同

         



###   移动端混合开发（Hybrid App）

           分类： 
                 1. 多view混合型
                 2. 单view混合型
                 3. web主体
                 4. 多主体共存型

          
          通过JSBridge与native或H5互相通信
           






###   小程序组件化
         
         类比vue react组件化思想 

            Component {
                  
               options: {}
               
               properties: {}   // 组件的属性

               data: {} // 组件的初始数据

            }

            组件传值  // 类比其他mvvm框架  
        
         
         
  
         
###   快应用  
       
        对比小程序  vue框架

            ├── manifest.json
            ├── app.ux
            ├── Page1
            │   ├── page1.ux
            ├── Page2
            │   ├── page2.ux
            └── Common
            ├── ComponentA.ux
            ├── ComponentB.ux
            └── xxx.png

               
               mainfest.json包含了应用描述 接口声明 页面路由信息
         

       
###   小程序多端框架  
   
            taro (react)
            uniapp (vue)
            mpvue (vue)

