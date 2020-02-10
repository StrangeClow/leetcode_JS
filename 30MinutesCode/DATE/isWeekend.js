/**
 *   判断是否是周末 
 *  
 *    先获取当前日期 new Date()
 * 
 *      
 *
 * @param {*} [t=new Date()]
 * @returns
 */
const isWeekend = (t = new Date()) => {
    return (t.getDay()) % 6 === 0  
}