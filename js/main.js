// Main navigation underline animation
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const underline = document.querySelector(".nav-underline");

  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      const { left, width } = e.target.getBoundingClientRect();
      underline.style.transform = `translateX(${left}px)`;
      underline.style.width = `${width}px`;
    });
  });
});

// Redirect to compost page on click
document.querySelector("#hero-section").addEventListener("click", () => {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "compost.html";
  }, 700);
});
