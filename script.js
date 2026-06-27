const container = document.querySelector(".container");
const resize = document.querySelector(".resize");
const reset = document.querySelector(".reset");

let n = 16; //default size

function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size ** 2; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    row.style.width = `${100 / size}%`;
    row.style.height = `${100 / size}%`;
    row.style.background = "white";

    row.addEventListener("mouseenter", () => {
      row.style.background = "#111111";
    });

    container.appendChild(row);
  }
}

createGrid(n);

resize.addEventListener("click", () => {
  let i = Number(prompt(`Enter grid (min 1 max 100) :`));
  if (i >= 1 && i <= 100) {
    n = i;
    createGrid(n);
  }
});

reset.addEventListener("click", () => {
  createGrid(n);
});
