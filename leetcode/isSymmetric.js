/**
 *    给定一颗二叉树，判断这棵树是不是对称的，如果当前树和它的镜像一样，那么他就是对称的 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

         1
        / \
       2   2
       / \ / \
       3  4 4  3
 * 
 *   definition for a binary tree node
 *   
 *   function TreeNode(val) {
 *     this.val = val
 *     this.left = null
 *     this.right = null
 *  }
 * 
 * 
 * @param {*} root
 * @returns
 */
const isSymmetric= function(root) {
   
    // 若节点为空
   if(root === null) return true

   // 
}