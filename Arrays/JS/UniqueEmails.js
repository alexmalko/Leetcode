var numUniqueEmails = function (emails) {
  let set = new Set();
  for (const e of emails) {
    l = e.substr(0, e.indexOf("@"));
    d = e.substr(e.search("@"));
  }
  if (l.includes("+")) {
    l = l.substr(0, l.indexOf("+"));
  }
  console.log(l);
  console.log(d);
};

console.log(numUniqueEmails(["alex+malko@live.ru"]));
