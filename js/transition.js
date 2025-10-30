// js/transition.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const body = document.body;
  const grass = document.querySelector(".grass");
  const mountain = document.querySelector(".mountain");
  const compostBin = document.querySelector(".compost-bin");
  const heroText = document.querySelector(".hero-text");

  // Initial entrance animation
  requestAnimationFrame(() => {
    body.classList.add("loaded");
    if (heroText) heroText.classList.add("fade-in");
    if (compostBin) compostBin.classList.add("fade-in");
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Prevent reloading the same page
      if (window.location.pathname.endsWith(href)) return;

      // Determine direction of slide
      const allLinks = Array.from(links);
      const currentIndex = allLinks.findIndex((a) =>
        a.href.includes(window.location.pathname.split("/").pop())
      );
      const targetIndex = allLinks.indexOf(link);
      const direction = targetIndex > currentIndex ? "right" : "left";

      // Add exit animations
      body.classList.remove("loaded");
      if (heroText) {
        heroText.classList.remove("fade-in");
        heroText.classList.add("fade-out");
      }
      if (compostBin) {
        compostBin.classList.remove("fade-in");
        compostBin.classList.add("fade-out");
      }

      // Slide backgrounds
      if (direction === "right") {
        grass.style.transform = "translateX(-100%)";
        mountain.style.transform = "translateX(60px)";
      } else {
        grass.style.transform = "translateX(100%)";
        mountain.style.transform = "translateX(-60px)";
      }

      // Navigate after animation completes
      setTimeout(() => {
        window.location.href = href;
      }, 900); // matches fade/slide duration
    });
  });
});
