const container = document.querySelector("div");

function etchASketch(n = 9) {
  for (let i = 1; i <= n ** 2; ++i) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.width = `${800 / n - 2}px`;
    square.style.height = `${800 / n - 2}px`;
    container.appendChild(square);
  }
}

etchASketch();
