/**
 *  翻转二叉树  
 * 
 *   输入：
 *      2
 *    /   \
 *   3     4
 * /  \   /  \
 * 5   6  7   8
 * 
 * 
 * 输出： 
 *      2
 *    /   \
 *   4     3
 * /  \   /  \
 * 8   7  6   5
 *
 * @param {*} root
 * 
 *  声明一个二叉树节点  
 *   function treeNode() {
 *   this.val = val
 *   this.left = this.right = null
 *  }
 * 
 * 
 */
const turnTree = function(root) {
    
    // 边界情况 若非树节点 则返回null
    if(!root)  return null
    
    // 解构赋值  交换变量 
    [root.left, root.right] = [turnTree(root.right, root.left)]

}


//   核心  交换左右树节点的位置   



