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

//scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.text__content, .about__data, .about__img
        , .product__content, .career__input, .career__label
        , .texarea, .contact__form, .contact__info, .footer__logo , .footer__images, .parag `,
  {
    interval: 200,
  }
);
const rr = ScrollReveal({
  origin: "right",
  distance: "60px",
  duration: 3000,
  reset: true,
});
rr.reveal(`.img__content`, { interval: 400 });
