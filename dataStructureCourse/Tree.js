/**
 *   树   
 * 
 * 
 *     树的节点  next. 
 *
 */
var Tree = function() {

    // 初始化一个节点
    var node = function(value) {

        this.value = value
        this.left = null
        this.right = null
    }

    // 存储根节点
    var root = null  

    // 插入节点的解构方法
    var insertNode = function(node, newNode) {
       
        if(newNode.value > node.value) {
            // 向右边走
            if(node.right == null) {
              node.right = newNode
            }
            else {
                // 调用自身 插入到下一级节点  
                insertNode(node.right, newNode)
            }
        }
        // 向左边走
        else if(newNode.value < node.value) {
            if(node.left == null) {
                // 赋值非左侧节点 
                node.left = newNode
            } 
            else {
                // 调用自身 
                insertNode(node.left, newNode)
            }
        }
    }
    
    // 插入树节点
    this.insert = function(value) {
        // 创建初始节点
      var newNode = new Node(value)
      // 判断树是否为空 
      if(root == null) {
        root = newNode  
      }
      //  树在插入式节点不为空 需要判断插入的节点 左边还是右边 
      else {
          // 插入的节点 
         insertNode(root, newNode)
      }
    }

    // 搜索树节点
    this.search = function(value) {

    }

    // 移除树节点  最复杂的一种操作 
    this.remove = function(value) {
      
        // 1.当前移除的节点为根节点


        // 2.当前移除的节点有两个子节点


        // 3.当前移除的节点只有一个子节点 



        
    }

    // 遍历树节点
    this.traverse = function(value) {

    }

    
    // 获取节点
    this.getRoot = function() {
           return root
    }

}


  // 测试代码 

  var t = new Tree()

   t.insert(2)
   t.insert(3)
   t.insert(8)
   t.insert(9)




   
   //   