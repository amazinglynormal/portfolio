const mobileNavMenu = document.querySelector(".mobile-nav");

const toggleMobileNavMenu = () => {
  mobileNavMenu.classList.toggle("hide");
  mobileNavMenu.classList.toggle("show");
};

const navMenuBtn = document.querySelector(".nav-menu-btn");
navMenuBtn.addEventListener("click", toggleMobileNavMenu);

const closeMobileNavMenuBtn = document.querySelector(".close-menu-btn");
closeMobileNavMenuBtn.addEventListener("click", toggleMobileNavMenu);

const mobileNavItems = document.querySelectorAll(
  ".mobile-nav .nav-link-item a"
);

mobileNavItems.forEach((item) => {
  item.addEventListener("click", toggleMobileNavMenu);
});
