function saydHello(n) {
  if (n === 0) {
    return;
  }
  console.log("hello");
  saydHello(n - 1);
}

saydHello(10);
