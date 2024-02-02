const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener("input", function(event) {
    const inputValue = event.target.value.replace(/^\s+|\s+$/g, '');
    if (inputValue !== '') {
        outputElement.textContent = inputValue
        console.log(inputValue)
    } else {
        outputElement.textContent = 'Anonymous'; // Якщо введено пустий рядок або лише пробіли, встановлюємо "Anonymous"
      }
  });