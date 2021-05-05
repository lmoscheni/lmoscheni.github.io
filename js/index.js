window.onscroll = function () {
  const mybutton = document.getElementById("toTopButton");
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function listenMenuButton() {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menu.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menu.classList.remove("open");
      menuOpen = false;
    }
  });

  menu.childNodes
    .item(1)
    .childNodes.item(1)
    .childNodes.forEach((e) => {
      if (e.tagName === "LI") {
        e.addEventListener("click", () => {
          if (!menuOpen) {
            menuBtn.classList.add("open");
            menu.classList.add("open");
            menuOpen = true;
          } else {
            menuBtn.classList.remove("open");
            menu.classList.remove("open");
            menuOpen = false;
          }
        });
      }
    });

}
