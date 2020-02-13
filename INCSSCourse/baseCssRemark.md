###    css相关内容

       定位  position
                absolute: 像对于static定位以外的第一个父元素进行定位
                relative: 生成相对定位的元素，像对于其正常位置进行定位。
                fixed: 固定定位，相对于浏览器窗口进行定位。


###   css3新内容
         动画
         渐变
         过渡效果
         阴影
         圆角
         ...

###   居中相关
          1. transform  
                  {
                      position: absolute;
                      top:50%;left:50%;
                      text-aling:center;
                      transform:translate(-50%,-50%);
                  }
            2. grid
            3. flex
            4. margin: 0 auto; text-aling:center;
            5. table-cell



 ###  CSS样式优先级排序 

        浏览器缺省 < 外部样式表 < 外部样式表类选择器 < 外部样式表类派生选择器 < 外部样式表ID选择器 < 外部样式表ID派生选择器 < 内部样式表 < 内部样式表类选择器 < 内部样式表类派生选择器 < 内部样式表ID选择器 < n内部样式表ID派生选择器 < 内联样式 


        同一个元素 多个class 后者优先(近者优先) !important最高




 ###  盒模型   
 
         1. 标准盒模型   width = content
         2. IE盒子模型   width = padding + border + content
          