const form = document.querySelector("form");
const submitButton = document.querySelector(".submit-btn");

suppressValidationUI(form);

relocateErrorMessages();

replaceValidationUI();

hideErrorMessages();

function suppressValidationUI(form) {
  // Suppress the default bubbles
  form.addEventListener(
    "invalid",
    (e) => {
      e.preventDefault();
    },
    true
  );

  // Support Safari, iOS Safari and Android
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
    }
  });
}

function relocateErrorMessages() {
  submitButton.addEventListener("click", () => {
    let invalidFields = form.querySelectorAll(":invalid"),
      errorMessages = form.querySelectorAll(".error-msg"),
      parent;

    // Remove any existing messages
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].parentNode.removeChild(errorMessages[i]);
      errorMessages[i].classList.remove("error");
    }

    //   Insert default error message
    for (let i = 0; i < invalidFields.length; i++) {
      let parent = invalidFields[i].parentNode;
      parent.insertAdjacentHTML(
        "beforeend",
        "<div class='error-msg'>" +
          invalidFields[i].validationMessage +
          "</div>"
      );
      parent.classList.add("error");
    }

    // If there are errors, give focus to the first invalid field
    if (invalidFields.length > 0) {
      invalidFields[0].focus();
    }
  });
}

function replaceValidationUI() {
  let forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    suppressValidationUI(form);
  });
}

function hideErrorMessages() {
  // Hide error message when input/textarea field clicked

  document.addEventListener("click", (e) => {
    const selectedField = e.target;

    if (selectedField.classList.value === "text-input") {
      selectedField.parentNode.classList.remove("error");
      selectedField.parentNode.lastChild.remove();
    }
  });
}
