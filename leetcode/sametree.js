/**
 * 题意：  给定两个二叉树，检查是否相同
 *   如果两棵树在结构上相同 并且节点具有相同的值，则认为他们是相同的
 * 
 * 
 *  思路： 深度优先搜DFS来递归   
 * 
 *    实例1输入:       1         1
                / \       / \
                2   3     2   3

                [1,2,3],   [1,2,3]

                     输出: true


        实例2输入:  1          1
                   /           \
                  2             2

                  [1,2],     [1,null,2]

                  输出: false


 *
 * @param {*} p
 * @param {*} q
 * @returns
 */
var isSameTree = function(p, q) {
  // 边界情况1   二者都不是标准树结构
  if(!p && !q) {
   return true
  }
  if((p && !q) || (!p && q) || (p.val != q.val)) {
    return false
  }
  //  递归刷左右
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}