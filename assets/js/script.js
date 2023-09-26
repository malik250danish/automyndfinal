// Init ScrollMagic

//  <!-- for navbar fixed -->

const navbar = document.querySelector(".navbar");
const originalOffsetTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > originalOffsetTop) {
    navbar.classList.add("fixed-top");
    navbar.classList.add("shadowNav");
  } else {
    navbar.classList.remove("fixed-top");
    navbar.classList.remove("shadowNav");
  }
});

//   <!-- for removing the zoon-in-left and right on mobile devices -->

document.addEventListener("DOMContentLoaded", (event) => {
  if (window.innerWidth <= 768) {
    document
      .querySelectorAll('.specification[data-aos="zoom-in-left"]')
      .forEach((el) => {
        el.setAttribute("data-aos", "fade-up");
      });
    document
      .querySelectorAll('.specification[data-aos="zoom-in-right"]')
      .forEach((el) => {
        el.setAttribute("data-aos", "fade-up");
      });
  }
});
