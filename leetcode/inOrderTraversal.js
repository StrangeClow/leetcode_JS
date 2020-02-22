/**
 *   二叉树的中序遍历  
 * 
 *       栈  树    哈希表   
 * 
 *   中序遍历优先遍历左节点，然后输出中间节点的val 最后遍历右节点 
 *
 * @param {*} root
 */
const inOrderTraversal = function(root) {
  
    // 创建相应的栈 节点空间 
  let stack = [], list = [],  node = root 

      while(node !== null || stack.length > 0) {

        while(node != null) {

           stack.push(node)

           node = node.left
        }
        
        node = stack.pop()

        list.push(node.val)

        node = node.right

      }
      return list
}