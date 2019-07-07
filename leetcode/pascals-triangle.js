function pascalsTriangle(m,n) {
    // 先判断特殊情况 以及边界问题
    if(n == 0) return 1;
    else if(m == n) return 1; 
    else return pascalsTriangle(m-1,n-1)+pascalsTriangle(m-1,n);//中间的数为前一行的两个数相加
}
function Print(n){ 
    for( var i = 0 ; i < n ; i++ ){ 
        let arr=[];//用来放第i行的数
        for ( var j = 0 ; j <= i ; j++ ) {
            arr.push(pascalsTriangle(i,j));
        }
            console.log(arr.join(' '));//字符串形式输出 
   }
}

// 打印规则的杨辉三角问题
