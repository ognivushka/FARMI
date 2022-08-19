// mobile novigation
const btnNavEl = document.querySelector(".button-mob-nav");
const headerEl = document.querySelector(".main-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
