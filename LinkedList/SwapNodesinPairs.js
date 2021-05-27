var swapPairs = function (head) {
  if (head === null) return null;
  let temp = new ListNode();
  temp.next = head;
  let current = temp;
  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;
    first.next = second.next;
    current.next = second;
    current.next.next = first;
    current = current.next.next;
  }
  return temp.next;
};

var swapPairs = function (head) {
  if (head === null) return null;
  let temp = new ListNode();
  let node = temp;
  temp.next = head;
  while (node && node.next && node.next.next) {
    let next1 = node.next;
    let next2 = next1.next;
    let next3 = next2.next;

    node.next = next2;
    next2.next = next1;
    next1.next = next3;
    node = next1;
  }

  return temp.next;
};
