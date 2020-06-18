/**
 *  链表中倒数第k个节点 
 * 
 *      输入一个链表 输出该链表中倒数第k个节点  
 * definition for singly-linked list
 * function ListNode(val) {
 *    this.val = val
 *    this.next = null
 * }
 *
 * @param {*} head
 * @param {*} k
 * @returns
 */
const getKthFromEnd = function(head, k) {      // 双指针 
  
    let p = head, q = head    // 声明p q两个指针 

    let i = 0

    while(p) {
        if(i > k) {
            q = q.next   // 让p先走k步
        }
        p = p.next
        i++
    }
    return i < k ? null : q
}


