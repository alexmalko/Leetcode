var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let sum = 0;
  let dummy = new ListNode();
  let cur = dummy;
  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    sum = x + y + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) cur.next = new ListNode(carry);
  return dummy.next;
};
