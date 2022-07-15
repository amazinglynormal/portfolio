const projectLinkTexts = document.querySelectorAll(".project-link-text");
const projectArticles = document.querySelectorAll(".project-link");

for (i = 0; i < projectArticles.length; i++) {
  const element = projectLinkTexts[i];
  projectArticles[i].addEventListener("mouseenter", () => {
    element.classList.add("hover");
  });
  projectArticles[i].addEventListener("mouseleave", () => {
    element.classList.remove("hover");
  });
}
