const gridElDOM = document.querySelector(".grid");

for (let i = 0; i < 100; i++) {
  let n = i + 1;

  const boxElDOM = document.createElement("div");
  boxElDOM.classList.add("box");
  gridElDOM.append(boxElDOM);

  if (n % 3 === 0 && n % 5 === 0) {
    n = "fizzbuzz";
    boxElDOM.classList.add("fizzbuzz");
  } else if (n % 3 === 0) {
    n = "fizz";
    boxElDOM.classList.add("fizz");
  } else if (n % 5 === 0) {
    n = "buzz";
    boxElDOM.classList.add("buzz");
  }
  boxElDOM.innerHTML = n;
}
