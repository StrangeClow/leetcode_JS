/**
 *  获取距离顶部的高度
 *
 */
const scrollToTop =() => {
    // 兼容新老浏览器
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if(c > 0) {
        // requestAnimationFrame 高速浏览器希望执行一个动画 
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, c- c / 8)
    }
}