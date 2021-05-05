const number = document.querySelector(".number");

const btnDecrease = document.querySelector("#decrease");
const btnReset = document.querySelector("#reset");
const btnIncrease = document.querySelector("#increase");

let accNum = 0;
function adjustNumber(int) {
  accNum += int;
  number.textContent = accNum;
}

btnIncrease.addEventListener("click", () => adjustNumber(1));
btnDecrease.addEventListener("click", () => adjustNumber(-1));
btnReset.addEventListener("click", () => {
  accNum = 0;
  number.textContent = 0;
});
