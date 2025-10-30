// Dialog logic
const dots = document.querySelectorAll(".step-dot");
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const step = dot.dataset.step;
    document.getElementById(`step${step}`).show();
  });
});

function closeDialog(step) {
  document.getElementById(`step${step}`).hide();
}

// Parallax grass movement on horizontal scroll
const scrollContainer = document.querySelector(".steps-container"); // scrollable container
const grass = document.getElementById("grass");

scrollContainer.addEventListener("scroll", () => {
  const offset = scrollContainer.scrollLeft * 0.05; // small movement
  grass.style.transform = `translateX(-${offset}px)`;
});

const mountain = document.querySelector(".mountain-bg");
mountain.style.transform = "translateY(100px)"; // moves mountain down slightly
