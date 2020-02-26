//  creteElement  

/**
 *  根据一个字符串创建一个元素  
 *
 * @param {*} str
 * @returns
 */


//  在浏览器环境下才可以    

const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};


let el  = '<div clss="container"> <p>hello world</p> </div>'


console.log(createElement(el));