//  creteElement  

/**
 *  根据一个字符串创建一个元素  
 *
 * @param {*} str
 * @returns
 */
const createElement =  str => {
  const el = document.createElement('div')
  el.innerHTML = str;
  return el.firstEelementChild
}