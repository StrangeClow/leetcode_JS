/**
 *  删除元素  
 *
 * @param {*} arr  要删除的元素列表 
 * @param {number} [n=1]  
 * 
 * 
 *  slice() 从已有的数组中返回选定的元素  
 *     
 *          1. ArrayObject.slice(start, end) =====> start起止位置  end====>结束位置
 * 
 * 
 */
const drop = (arr, n = 1) => arr.slice(n);



console.log(drop([12,34,56,78,90],1));