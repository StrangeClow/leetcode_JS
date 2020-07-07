/**
 *  题意： 给定一二叉树，求取其的最大深度
 *   二叉树的深度为根节点到最远子节点的最长路径上的节点数
 * 
 *  Definition for a binary tree node
 * 
 *  function treeNode(val) {
 *    this.val = val
 *    this.left = this.right = null
 *  }
 *
 * @param {*} root
 * @returns
 */

const maxDepth = function(root) {    // 递归求解 

  // 边界情况 
  if(!root || root == null) {
     return 0
  }
  
  // 递归检查左右树节点
  var left_depth = maxDepth(root.left);

  var right_depth = maxDepth(root.right);

  
  // 求取左右节点中的最大值 再加上根节点
  return Math.max(left_depth, right_depth)+1;  
}

let r = [3,9,20,null,null,15,7]
console.log(maxDepth(r));