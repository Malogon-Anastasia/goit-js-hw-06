function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");

buttonRef.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorRef.textContent = color;
}