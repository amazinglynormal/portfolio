const projectLinkTexts = document.querySelectorAll(".project-link-text");
const projectArticles = document.querySelectorAll(".project-link");

for (i = 0; i < projectArticles.length; i++) {
  const element = projectLinkTexts[i];
  projectArticles[i].addEventListener("pointerenter", () => {
    element.classList.add("hover");
  });
  projectArticles[i].addEventListener("pointerleave", () => {
    element.classList.remove("hover");
  });
}

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
