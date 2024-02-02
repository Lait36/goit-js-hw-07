const form = document.querySelector(".login-form");
function formHandler(event) {
  event.preventDefault();
  const elements = event.target.elements;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();
  const obj = {
    email,
    password,
  };
  if (email === "" || password === '') {
    alert("All form fields must be filled in");
  } else {
    console.log(obj);
  }

  form.reset();
}
form.addEventListener("submit", formHandler);
