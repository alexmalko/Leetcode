var reorderList = function (head) {
  if (head === null) return head;
  let slow = head;
  let fast = head;
  let dummy = new ListNode();
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversed = null;

  while (slow) {
    let next = slow.next;
    slow.next = reversed;
    reversed = slow;
    slow = next;
  }

  let l1 = head;
  let l2 = reversed;

  while (l2.next) {
    let l1_next = l1.next;
    let l2_next = l2.next;
    l1.next = l2;
    l2.next = l1_next;
    l1 = l1_next;
    l2 = l2_next;
  }
  return head.next;
};
