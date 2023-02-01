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

const emailText = document.querySelector(".email-text");

const copyToClipboardBtn = document.querySelector(".clipboard-btn");
const tooltip = document.querySelector(".tooltip");

const toggleTooltip = () => {
  copyToClipboardBtn.classList.toggle("clipped");
  tooltip.classList.toggle("show");
  tooltip.classList.toggle("hide");
};

copyToClipboardBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailText.textContent);
    toggleTooltip();
    setTimeout(toggleTooltip, 2000);
  } catch (error) {
    console.error("Failed to copy to clipboard", error);
  }
});
