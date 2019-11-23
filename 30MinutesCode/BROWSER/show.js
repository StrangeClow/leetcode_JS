/**
 * 显示所有指定的元素  展开运算符清除属性
 *
 * @param {*} el
 */
const show =(...el)=> 
       [...el].forEach(e=>
         (e.style.display = '')
) 