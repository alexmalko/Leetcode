// two pointers
var removeNthFromEnd = function (head, n) {
  if (head === null) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

// count the length of the list
var removeNthFromEnd = function (head, n) {
  if (head === null) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let length = 0;
  let curr = head;
  let pointer = dummy;
  while (curr) {
    length++;
    curr = curr.next;
  }
  let steps = length - n;
  for (let i = 0; i < steps; i++) {
    pointer = pointer.next;
  }
  pointer.next = pointer.next.next;
  return dummy.next;
};
