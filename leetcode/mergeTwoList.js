/** 
 * 合并有序链表
 *   将两个有序链表合并为一个新的有序链并返回 新链表是通过给定的两个链表的所有节点组成的
 * 
 *  例如
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

 var mergeTwoLists = function(l1,l2) {
    let l3 = new ListNode(-1),
    c3 = l3;
    while(l1.val !== null && l2.val !== null) {   // 判断给定有序链表是否为空
        if(l1.val <= l2.val) {
            c3.next = l1;
            l1 = l1.next;
        } else {
            c3.next = l2;
            l2 = l2.next;
        }
        c3 = c3.next;
    }
    //循环完某一链表后 将另一链表剩下的部分直接加入到l3
    c3.next = (l1===null) ? l2 : l1;
    return l3.next;
 },



 /** 
  *  区别于数组 数组中的元素在内存中是连续存在的，而链表则是分散在内存中的，通过指针连接起来的一种数据结构
  * 
  * 链表中的节点
  *   每一个节点通常有至少两个属性，一个表示该节点的值，另外一个就是指向下一个节点的指针，用next表示
  *   
  *  合并有序链表  最简单的方案是 把两个链表中的所有key都拿出来放到一个数组里，然后在对数组排序，根据数组，构建一个链表。。
  * 
  * 方案2 . 比较两条链表的头节点的大小 将较小者作为新链表的头节点 然后递归调用
 */


 /**  
  * 
  * 采用 尾插法 指向节点
  */
var mergeTwoListsTwo = function(l1, l2) {
    let aa = new ListNode();
    let current_reference = aa;
      while (l1 && l2) {
         if(l1.val <= l2.val){
             current_reference.next = new ListNode(l1.val);
            l1 = l1.next;
         } else {
             current_reference.next = new ListNode(l2.val);
             l2 = l2.next;
         }
         current_reference = current_reference.next;
      }
       current_reference.next = l1 || l2;
       return aa.next; 
};