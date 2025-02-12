function f1(n1, n2, valueToAdd, func) {
  for (let i = 1; i <= n2; i++) {
    n1 += func(n1, valueToAdd);
  }
  return n1;
}
function f2(a, b) {
  return a + b;
}
console.log(f1(5, 3, 1, f2));
