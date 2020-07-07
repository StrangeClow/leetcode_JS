Array.prototype.implFilter = function(fn, context) {
    
    // 数组的每个元素调用filter的callback回调函数 

    console.log('fn===>',fn, 'context===>',context);

    if(typeof fn !== 'function') {
       throw new Error(`${fn} is not a function`)
    }
   
    let tempThis = this
    let arr = []
   
    for(let index = 0; index < tempThis.length; index++) {
      
       
      let result = fn.call(context, tempThis[index], tempThis)
    
      if(result) {
         arr.push(tempThis[index])
      }
    }
   
    return arr
}


let n = [1,2,3,4,5,6,7,8]

const testFilter = function(arr) {
    return arr.implFilter((item, index)=> {
        return item % 2 == 0
    })
}


console.log(testFilter(n));