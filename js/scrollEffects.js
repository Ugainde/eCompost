// scrollEffects.js
document.addEventListener("DOMContentLoaded", () => {
  const mountain = document.querySelector(".background.mountain");
  const grass = document.querySelector(".foreground.grass");

  let lastScrollY = 0;

  function handleScroll() {
    const scrollY = window.scrollY;
    const diff = scrollY - lastScrollY;
    lastScrollY = scrollY;

    // Parallax speed multipliers
    const mountainSpeed = 0.15; // slower for distant effect
    const grassSpeed = 0.3; // faster for foreground

    // Apply transformations
    if (mountain) {
      mountain.style.transform = `translateY(${scrollY * mountainSpeed}px)`;
    }

    if (grass) {
      grass.style.transform = `translateY(${scrollY * grassSpeed}px)`;
    }

    requestAnimationFrame(handleScroll);
  }

  requestAnimationFrame(handleScroll);
});
