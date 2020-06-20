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
  
    let right  = head 
   
    // right先向右移动k位， 然后   right  - left = k（因为移动了k位）  
    for(let  i = 0; i < k; i++) {
        if(right == null) {
            return null
        }
        right = right.next
    }
    
    let left = head
    
    // left = right - k  =  length -k        // 80634371
    while(right) {
       // left right一起向右移动节点 直到边界 next  
       left = left.next
       right = right.next
    }

    return left
}


