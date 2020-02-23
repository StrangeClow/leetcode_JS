/**
 *  题意： 给定一二叉树，求取其的最大深度
 *   二叉树的深度为根节点到最远子节点的最长路径上的节点数
 *
 * @param {*} root
 * @returns
 */
const maxDepth = function(root) {

  // 边界情况 
  if(!root) {
     return 0
  }
  
  // 队规检查左右树节点
  var left_depth = maxDepth(root.left);

  var right_depth = maxDepth(root.right);

  // 求取左右节点中的最大值 再加上根节点
  return Math.max(left_depth, right_depth)+1;  
}