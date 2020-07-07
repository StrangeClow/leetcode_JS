/**
 *  二叉树的前序遍历
 *  Definition for a binary tree node
 *  function TreeNode(val) {
 *    this.val  = val
 *    this.left = this.right = null
 * } 
 * @param {*} root
 * @returns
 */

const preorderTraversal = function(root) {      // 前序遍历    根-左-右
   
    // 1.  递归终结条件
    // 2.  处理当前层逻辑代码
    // 3. 下探到下一层
    // 4. 清理当前层状态
    let res = []
    //  定义递归函数 
    let RecursionFunc = function(root) {
        if(root === null) return 
        // 先根节点
        res.push(root.val)
        // 左节点
        RecursionFunc(root.left)
        // 右节点
        RecursionFunc(root.right)
    }
    // 递归root
    RecursionFunc(root)
    // 抛出结果 
    return res
}