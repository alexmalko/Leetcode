var levelOrder = function (root) {
  const res = [];
  let queue = [];
  let depth = 0,
    num = 0;
  if (root) queue.push(root);
  while (queue.length) {
    res.push([]);
    num = queue.length;
    for (let i = 0; i < num; i++) {
      const curr = queue.shift();
      if (!curr) continue;
      res[depth].push(curr.val);
      queue.push(...curr.children);
    }
    depth++;
  }
  return res;
};
