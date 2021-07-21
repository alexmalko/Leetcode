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

// construct linkedList
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let one = new ListNode(
  "1",
  new ListNode("2", new ListNode("3", new ListNode("4", new ListNode("5"))))
);

console.log(one);

console.log(swapPairs(head));
