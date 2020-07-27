var val= 12
function fun1() {
    // val此时读取不到值  变量声明提升  但赋值未提升
    console.log(val);
    var val = 20
    console.log(val);
}
fun1()