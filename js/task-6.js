function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; // Clear previous boxes

  let boxSize = 30;
  let boxesHTML = "";
  for (let i = 0; i < amount; i++) {
    const boxHTML = `
      <div class="box" style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>
    `;
    boxesHTML += boxHTML;
    boxSize += 10;
  }
  boxesContainer.insertAdjacentHTML("beforeend", boxesHTML);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", function () {
  const input = document.querySelector('input[type="number"]');
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; // Clear input value
  }
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
