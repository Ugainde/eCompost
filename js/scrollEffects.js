// parallax depth effect for scrolling through the grass and mountain
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const mountain = document.querySelector(".background.mountain");
  const grass = document.querySelector(".foreground.grass");

  if (mountain) {
    gsap.to(mountain, {
      y: () => window.innerHeight * 0.15, // lower ratio/speed for mountain
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }

  if (grass) {
    gsap.to(grass, {
      y: () => window.innerHeight * 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }
});
