//  函数的类型 

   /** 
    *  在javascript中，有两种常见的定义函数的方式  
    * 
    *    1.  函数声明 
    *    2. 函数表达式 
    *
    * 
    * 
    *  */  

    function add(x,y) {    //  函数声明 
        return x = y
    }
         

   let sum = function(x,y) {    // 函数表达式 
       return x + y
   } 


   function sumTS(x :number, y :number) :number {    // 需要考虑输入和输出  注意输入多余的参数或是晒输入参数都是不允许的 

       return x + y 
   }



   // 用接口定义函数的形状

    interface searchFunc {
     (
         source: string,
         subString: string
     ): boolean
    }

    let mySearch : searchFunc;
    mySearch = function( source: string,subString: string) {
      return source.search(subString) !== -1
    }



    // 可选参数

      // 定义可选的参数 与接口定义的可选属性类似， 我们用？表示可选的参数 

    function buildName(firstName :string, lastName? :string) {
     if(lastName) {
       return `${firstName}+${lastName}`
     }
     else {
         return firstName
     }
    }   

    let tomcat = buildName('tom','cat')

    let tomm = buildName('tom',undefined)


    // 参数默认值 

        // 在es6中，我们允许给函数的参数添加默认值，ts会将添加了默认值的参数识别为可选参数

        