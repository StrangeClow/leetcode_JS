//  数组的类型 

//     在typescript中，数组类型有多种定义方式   但数组中不允许出现其他的类型 
   
//  1. 最简单的方式是使用 [类型+方括号]来表示数组

let all : number[] = [1,2,3,4,5]


//  数组泛型

   // 我们也可以使用数组泛型来表示数组 

   let allInfo :Array<number> = [1,2,3,4,5,6]


// any在数组中的应用 

 let list : any[] = ['aaa',232,{name:'hahahaha'}]





