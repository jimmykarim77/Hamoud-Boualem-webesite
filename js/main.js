/****************menu show hidden**** */

const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

//show

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
//hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

//remove menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// scroll sections active link

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrolly = window.pageYOffset;
  sections.forEach((currents) => {
    const sectionHeight = currents.offsetHeight;
    const sectionTop = currents.offsetTop - 50;
    sectionId = currents.getAttribute("id");

    if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

//change background header
function scrollHeader() {
  const Header = document.getElementById("header");

  if (this.scrollY >= 200) Header.classList.add("scroll-header");
  else Header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
