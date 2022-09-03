const form = document.querySelector("form");
const contactName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const contactNameValue = contactName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (!contactNameValue) {
    setErrorFor(contactName, "This field is required");
  }
}

function setErrorFor(input, message) {
  const inputGroup = input.parentElement;
  const errorMessage = inputGroup.querySelector(".error-msg");

  //   add error message
  errorMessage.innerText = message;

  //   add error class
  inputGroup.classList.add("error");
}
function setSuccessFor(input, message) {
  const inputGroup = input.parentElement;
  inputGroup.classList.remove("error");
}
