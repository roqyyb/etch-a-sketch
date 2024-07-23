let init = true;
const container = document.querySelector("div");
const btn = document.querySelector("button");
let numOfSquares = 0;

function etchASketch(n = 16) {
  container.innerHTML = "";
  if (numOfSquares > 0 && numOfSquares <= 100) {
    n = numOfSquares;
  }

  for (let i = 1; i <= n ** 2; ++i) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", `square-${i}`);
    square.style.width = `${800 / n - 2}px`;
    square.style.height = `${800 / n - 2}px`;
    container.appendChild(square);

    // color square on mouseover
    square.addEventListener("mouseover", () => {
      let opacity = +square.style.opacity;
      if (opacity === null) {
        opacity = 0.1;
      } else if (opacity < 1) {
        opacity += 0.1;
      }
      square.style.opacity = opacity;
      square.style.backgroundColor = "green";
    });
  }
}

if (init) {
  etchASketch();
  init = false;
}

btn.onclick = () => {
  const input = Number(
    prompt("Enter number of squares between 1 and 100, inclusive")
  );
  while (typeof input !== "number" || input === 0) {
    alert("Please enter a number");
    input = Number(
      prompt("Enter number of squares between 1 and 100, inclusive")
    );
  }
  numOfSquares = input;
  etchASketch(numOfSquares);
};
