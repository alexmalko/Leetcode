var reverseList = function (head) {
  let prev = null,
    curr = head,
    next;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// construct linkedList
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let one = new ListNode("hello", new ListNode("world", new ListNode("there")));

// let two = new ListNode("wold");
// one.next = two;

function traverse(head) {
  if (head === null) return;
  console.log(head.val);
  traverse(head.next);
}

console.log(one);
console.log(traverse(one));

console.log(reverseList(one));
