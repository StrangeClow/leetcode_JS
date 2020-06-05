//  实现一个闭包函数 

for(let i = 0; i < 5; i ++) {
   setTimeout(()=> {
       console.log(i)
   }, i * 1000)
}



for(var ii =0 ; ii < 5; ii++) {
    (function(j){
       setTimeout(function timer(){
           console.log(j)
       }, j*1000 )
    })(ii)
}