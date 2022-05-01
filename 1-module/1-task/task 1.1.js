function factorial(n) {
  if (n === 0) {
    return n = 1;
  }
  result = n;
  for (let i = n - 1; i > 1; --i) {
      result *= i;
  }
return result;
}
factorial(0);
factorial(1);
factorial(3);
factorial(5);
