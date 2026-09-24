const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#primary-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
