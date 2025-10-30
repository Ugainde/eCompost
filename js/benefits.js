// Animate statistics appearing as user scrolls to bin section
document.addEventListener("scroll", () => {
  const section = document.querySelector(".bin-stats-section");
  const stats = document.querySelectorAll(".stat");
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
    stats.forEach((stat, i) => {
      setTimeout(() => {
        stat.style.opacity = "1";
        stat.style.transform = `translateY(-${60 + i * 30}px)`;
      }, i * 300);
    });
  } else {
    stats.forEach((stat) => {
      stat.style.opacity = "0";
      stat.style.transform = "translateY(0)";
    });
  }
});
