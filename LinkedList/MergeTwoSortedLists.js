var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let current = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }
  if (l1) {
    current.next = l1;
  } else {
    current.next = l2;
  }
  return head.next;
};
