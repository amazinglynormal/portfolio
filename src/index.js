import "./main.scss";

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}

menuBtn.addEventListener("click", toggleMobileMenu);
closeBtn.addEventListener("click", toggleMobileMenu);
