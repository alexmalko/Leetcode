var partition = function (head, x) {
  let before_head = new ListNode();
  let before = before_head;
  let after_head = new ListNode();
  let after = after_head;
  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }
  after.next = null;
  before.next = after_head.next;
  return before_head.next;
};
