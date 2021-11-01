import "./main.css";

const openMenuButton = document.getElementById("open-menu-btn");
const closeMenuButton = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

openMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
