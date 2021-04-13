import "./main.css";

const closeMenuBtn = document.getElementById("close-menu-btn");
const openMenuBtn = document.getElementById("open-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const downloadCVBtns = document.getElementsByClassName("download-cv");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}

openMenuBtn.addEventListener("click", toggleMobileMenu);
closeMenuBtn.addEventListener("click", toggleMobileMenu);

for (const btn of downloadCVBtns) {
  btn.addEventListener("click", () => {
    console.log("Download CV");
  });
}
