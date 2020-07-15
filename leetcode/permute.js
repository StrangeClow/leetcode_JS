/**
 * 
 *   给定一个没有重复数字的序列，返回其所有可能的全排序
 * 
 *  input ===> [1,2,3]
 * 
 * output ===> 所有可能的1 2 3组合
 *
 * @param {*} nums
 * @returns
 */
const permute = function(nums) {        // 回溯递归   全排列类比决策树 
 
    let res = []
    let temPath = []
   
    // 递归函数 
    let backtrack = (temPath) => {
         // 若当前给定序列为空 
        if(temPath.length === nums.length) {
            res.push(temPath)
            return 
        }
        
        // 循环刷当前给定数值序列
        // 1. 循环当前项 2.初始项中是否包含循环子项 3. 把当前项添加到初始项中，并复制 做递归调用
        for(let index = 0; index < nums.length; index ++) {   // 或 for of
          
            // 若temPath中没有nums[index] 继续下一步
            if(!temPath.includes(nums[index])) {
                 // 把nums[index]添加到数组末尾 
                 temPath.push(nums[index])
                 // temPath.slice()浅拷贝当前temPath数组
                 // 递归调用
                 backtrack(temPath.slice())
                 // 删除数组末尾的值并返回  
                 temPath.pop()
            } 
        }
    }
    
    // 递归刷自身 抛入临时数据 
    backtrack(temPath)

    return res
}


let n = [1,2,3,4,5]
console.log(permute([1,2,3]));











console.log([1,2,3].pop());
console.log(n.push(6),n);
console.log(n.slice(), n);
console.log(n.pop(),n);




const permute2 = function(nums) {
 
}


const test1 = function(arr) {
    console.log(arguments,arr,arguments[0]);
    return arguments
}


let nn = [1,2,3,4,5]
console.log(test1(nn));



function test2() {
    let a =[1,2,3]
    a.join =a.shift
    console.log(a==1&&a==2&&a==3);
}

console.log(test2());


function A() {
    let a = 1
    window.B = function () {
        console.log(a)
    }
  }


  console.log(A());
  console.log(B());





  function foo(b) {
      var  a = 5
      return a * b * 10
  }

  function bar(x) {
    var y = 3
    return foo(x * y)
  }

  console.log(bar(6));




  var User = {
      count: 1, 
      getCount() {
          return this.count
      }
  }

  console.log(User.getCount());
  var func = User.getCount
  console.log(func());