var isPalindrome = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversed = null,
    next;
  while (slow) {
    next = slow.next;
    slow.next = reversed;
    reversed = slow;
    slow = next;
  }

  let p1 = head,
    p2 = reversed;
  while (p2) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
};
