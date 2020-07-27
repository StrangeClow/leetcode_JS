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




const getKthFromEnd2 = function(head, k) {    // 双指针   来自在于leetcode题解
    
    let p = head
    let q = head

    let i = 0
    while(p) {
        // 先让前指针指向链表的头指针并开始遍历，一直遍历到第 k-1 个节点，在这期间，后指针原地保持不动。
        if(i >= k) {
           q = q.next
        }
        /// 当前指针遍历到第 k 个节点时，后指针也指向链表头指针并开始遍历，在这之后，前指针每往后遍历一个节点，后指针也往后遍历一个节点。

       //  这样前后两指针的距离始终都保持为 k-1，当前指针遍历到链表的最后一个节点时，后指针刚好也就到了倒数第 k 个节点了。

        p = p.next
        i++
    }
    // 若当前i值小于指定节点  返回空  否则返回 q 
    return i < k ? null : q
}