/**
 *  将一个按照升序排列的有序数组，转换为一颗高度平衡二叉搜索树
 * 
 *  解析： 1 如果nums长度为 0  返回null
 *        2   如果长度为1  范湖一个节点
 *        3  如果nums长度大于1  首先以中点节点作为根节点，然后将两边的数组作为左右子树
 *
 * @param {*} nums
 * @returns
 */

function treeNode(val) {
  this.val = val
  this.left = val
  this.right = val
}

var sortedArrayToBST = function(nums) {
    // 处理边界情况
    if(nums === null || nums.length === 0)  {
      return null;
    } 
    //递归刷节点
    return generate(nums, 0, nums.length-1);
  };
  
  /**
   * 工具函数  
   *
   * @param {*} arr
   * @param {*} start
   * @param {*} end
   * @returns
   */
  function generate(arr, start, end) {
    if(start > end)
      return null;
    // 取中间值
    let mid = Math.floor((start+end)/2);
    // new 一个节点
    let root = new TreeNode(arr[mid]);
    root.left = generate(arr, start, mid-1);
    root.right = generate(arr, mid+1, end);
    
    return root;
  }