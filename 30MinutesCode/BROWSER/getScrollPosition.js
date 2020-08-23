/**
 *   返回当前页面滚动的位置  利用BOM相关的一些特性去解决     
 *
 * @param {*} [el=window]
 */
const getScrollPosition = (el = window) => ({
    x: el.pageOffest !== undefined ? el.pageOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrolltTop
})


