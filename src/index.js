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
