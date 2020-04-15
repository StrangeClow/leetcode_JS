/**
 *   返回当前时间的前一天时间
 *
 * @returns
 */
const yesterday = () => {
    // 拿到当前时间 
    let t = new Date()
    // 当前时间 - 1 
    t.setDate(t.getDate() - 1)
    //
    return t.toISOString().split('T')[0];
}


console.log(yesterday());