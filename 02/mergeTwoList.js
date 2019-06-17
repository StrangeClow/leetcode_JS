/** 
 * 合并有序链表
 *   将两个有序链表合并为一个新的有序链并返回 新链表是通过给定的两个链表的所有节点组成的
 * 
 * 
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