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
var sortedArrayToBST = function(nums) {
    // 处理边界情况
    if(nums === null || nums.length === 0)   
      return null;
    return generate(nums, 0, nums.length-1);
  };
  
  function generate(arr, start, end) {
    if(start > end)
      return null;
    let mid = Math.floor((start+end)/2);
    let root = new TreeNode(arr[mid]);
    root.left = generate(arr, start, mid-1);
    root.right = generate(arr, mid+1, end);
    
    return root;
  }