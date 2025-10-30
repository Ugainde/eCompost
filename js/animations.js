// Parallax scroll effect
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const mountain = document.querySelector(".mountain");
  const grass = document.querySelector(".grass");
  const bin = document.querySelector(".compost-bin");

  mountain.style.transform = `translateY(${scrollY * 0.2}px)`;
  grass.style.transform = `translateY(${scrollY * 0.4}px)`;
  bin.style.transform = `translateY(${scrollY * 0.3}px)`;
});
