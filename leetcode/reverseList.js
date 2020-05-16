/**
 *  反转链表
 * 
 *    定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点
 * 
 * 输入: 1->2->3->4->5->NULL  
 * 输出: 5->4->3->2->1->NULL
 *
 * @param {*} head
 * @returns
 */

function listNode() {
  this.val = val
  this.next = null
}

const reverseList = function(head) {    // 循环解法

  if(!head) {
    return null
  }
   //
   let prev = null
   let current = head
   // 循环当前链表 若头节点不为空
   while(current !== null) {
     // 标记当前节点的下一个节点
     let currentNext = current.next
     // 到达尾节点
     if(prev === null) {
         current.next = null
     }
     else {
         // 向后移动指针节点
         current.next = prev
     }
     // 移动指针
     prev = current
     current = currentNext
   }
   return prev
}