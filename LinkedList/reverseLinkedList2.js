var reverseBetween = function (head, m, n) {
  if (head === null) return head;
  let prev = null;
  let curr = head;
  while (m > 1) {
    prev = curr;
    curr = curr.next;
    m--;
    n--;
  }

  let connection = prev;
  let tail = curr;

  while (n > 0) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    n--;
  }

  if (connection) {
    connection.next = prev;
  } else {
    head = prev;
  }

  tail.next = curr;

  return head;
};
