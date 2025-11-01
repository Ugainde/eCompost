// grass and mountain loading animation
document.addEventListener("DOMContentLoaded", () => {
  const mountain = document.querySelector(".mountain");
  const grass = document.querySelector(".grass");

  if (mountain && grass) {
    gsap.set([mountain, grass], { y: 0 });

    // slide in transition
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 1.6 },
    });

    tl.fromTo(
      mountain,
      { y: 150 }, // below initial view
      { y: 0 }
    ).fromTo(
      grass,
      { y: 200 },
      { y: 0 },
      "<" // synchronised with the mountain
    );
  }
});
