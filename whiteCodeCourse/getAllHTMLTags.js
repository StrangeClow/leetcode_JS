
/**
 *  获取当前页面所有的HTML tag的名字 b并以不重复的数组形式输出
 *
 * @returns
 */
function getAllHTMLTags() {
  const tags = [...window.document.querySelectorAll('*')].map(  // querySelectorAll 获取元素标签
    dom => dom.tagName
  )
  return [... new Set(tags)]     // 标签去重
}