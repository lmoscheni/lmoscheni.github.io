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


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  const mybutton = document.getElementById("toTopButton");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const mybutton = document.getElementById("toTopButton");
}
