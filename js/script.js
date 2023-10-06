const gridElDOM = document.querySelector(".grid");

for (let i = 0; i < 100; i++) {
  let n = i + 1;
  const resto3 = n % 3;
  const resto5 = n % 5;
  const boxElDOM = document.createElement("div");
  boxElDOM.classList.add("box");
  gridElDOM.append(boxElDOM);

  if (resto3 === 0 && resto5 === 0) {
    n = "fizzbuzz";
    boxElDOM.classList.add("fizzbuzz");
  } else if (resto3 === 0) {
    n = "fizz";
    boxElDOM.classList.add("fizz");
  } else if (resto5 === 0) {
    n = "buzz";
    boxElDOM.classList.add("buzz");
  }
  boxElDOM.innerHTML = n;
}
