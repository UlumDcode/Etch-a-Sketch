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

    container.appendChild(row);
  }
}

createGrid(n);
