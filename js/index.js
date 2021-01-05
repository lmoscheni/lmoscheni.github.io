const EMAIL_FORMAT = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateForm(event) {
  const emailInput = document.forms["contact-form"]["_replyto"];
  const isValidEmail = EMAIL_FORMAT.test(String(emailInput.value).toLowerCase());

  if (isValidEmail) {
    emailInput.classList = emailInput.classList.filter(e => e !=='invalid-input');
  } else {
    emailInput.classList.add("invalid-input")
    return false;
  }
}

