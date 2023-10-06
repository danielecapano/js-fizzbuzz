for (let i = 0; i < 100; i++) {
  let n = i + 1;
  const resto3 = n % 3;
  const resto5 = n % 5;

  if (resto3 === 0 && resto5 === 0) {
    n = "fizzbuzz";
  } else if (resto3 === 0) {
    n = "fizz";
  } else if (resto5 === 0) {
    n = "buzz";
  }
  console.log(n);
}
