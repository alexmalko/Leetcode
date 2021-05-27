var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let p1 = headA,
    p2 = headB;
  while (p1 !== p2) {
    if (p1 === null) {
      p1 = headA;
    } else {
      p1 = p1.next;
    }
    if (p2 === null) {
      p2 = headB;
    } else {
      p2 = p2.next;
    }
  }
  return p1;
};
