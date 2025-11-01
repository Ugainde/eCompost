// clicking on home page navigates to compost page
document.addEventListener("click", () => {
  window.location.href = "compost.html";
});

// GSAP initial animation for text and compost bin
window.addEventListener("load", () => {
  gsap.from(".hero-text", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.from(".compost-bin", {
    opacity: 0,
    y: 100,
    duration: 1.4,
    ease: "back.out(1.7)",
    delay: 0.5,
  });
});

// SVG leaf animtaion
const NUM_LEAVES = 8;
const container = document.querySelector(".leaf-container");

for (let i = 0; i < NUM_LEAVES; i++) {
  // create leaf SVG
  const leaf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  leaf.setAttribute("viewBox", "0 0 64 64");
  leaf.classList.add("falling-leaf");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M32 2C20 10 10 22 10 36c0 14 10 26 22 26s22-12 22-26C54 22 44 10 32 2z"
  );
  path.setAttribute("fill", "#7ab24f");

  leaf.appendChild(path);
  container.appendChild(leaf);

  // random movement
  const startX = gsap.utils.random(0, window.innerWidth - 30);
  const duration = gsap.utils.random(4, 8);
  const drift = gsap.utils.random(-100, 100);

  gsap.fromTo(
    leaf,
    {
      x: startX,
      y: gsap.utils.random(-300, -50),
      rotation: gsap.utils.random(0, 360),
      scale: gsap.utils.random(0.5, 1),
    },
    {
      y: window.innerHeight + 50,
      x: startX + drift,
      rotation: "+=360",
      duration: duration,
      repeat: -1,
      ease: "sine.inOut",
      repeatRefresh: true,
    }
  );
}
