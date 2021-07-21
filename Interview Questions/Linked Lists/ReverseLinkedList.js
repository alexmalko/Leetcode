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

function traverse(head) {
  if (head === null) return;
  console.log(head.val);
  traverse(head.next);
}

// Reverse list => iterative solution
var reverseList = function (head) {
  let prev = null;
  while (head) {
    // remember next
    next = head.next;
    // set next to prev
    head.next = prev;
    // advance prev and head pointers
    prev = head;
    head = next;
  }
  return prev;
};

// Reverse list => recursive reversal
function reverseListRec(head) {
  if (head === null || head.next == null) return head;
  reversed = reverseListRec(head.next);
  head.next.next = head;
  head.next = null;
  return reversed;
}

console.log(one);
// console.log(reverseList(one));
console.log(reverseListRec(one));
