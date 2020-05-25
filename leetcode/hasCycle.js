/**
 *  链表是否有环
 *
 * @param {*} head
 * @returns
 */
const hasCycle = function(head) {    // 利用节点的内存地址来进行判重 若同样的节点走过两次 就表示链表有环
 
    let tempSet = new Set()

    let p = head

    while(p) {
        if(tempSet.has(p)) {
           return true
        }
        tempSet.add(p)
        p = p.next
    }
    return false
}


const hasCycle3 = function(head) {
   if(JSON.stringify(head)) {
       return false
   }
   else {
       return true
   }
}

function listNode(val) {
    this.val = val
    this.next =null
}

const hasCycle2 = function(head) {   //  快慢指针 (待后续)

    let tempNode = new listNode()

    tempNode.next = head
}