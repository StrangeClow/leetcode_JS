/**
 *   返回当前时间的前一天时间
 *
 * @returns
 */
const yesterday = () => {
    let t = new Date()
    t.setDate(t.getDate() - 1)
    return t.toISOString().split('T')[0];
}