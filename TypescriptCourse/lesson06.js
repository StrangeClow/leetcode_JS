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
function add(x, y) {
    return x = y;
}
var sum = function (x, y) {
    return x + y;
};
function sumTS(x, y) {
    return x + y;
}
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数
// 定义可选的参数 与接口定义的可选属性类似， 我们用？表示可选的参数 
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + "+" + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('tom', 'cat');
var tomm = buildName('tom', undefined);
// 参数默认值 
// 在es6中，我们允许给函数的参数添加默认值，ts会将添加了默认值的参数识别为可选参数
