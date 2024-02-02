function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
function buttonHandler() {
  const color = getRandomHexColor();
  const bgcolor = document.querySelector("body");
  const spanColor = document.querySelector(".color");
  spanColor.textContent = color;
  bgcolor.style.backgroundColor = color;

  console.log(bgcolor);
}

button.addEventListener("click", buttonHandler);
