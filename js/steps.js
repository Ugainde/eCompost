// steps click listener
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

// grass movement on horizontal scroll
const scrollContainer = document.querySelector(".steps-container");
const grass = document.getElementById("grass");

scrollContainer.addEventListener("scroll", () => {
  const offset = scrollContainer.scrollLeft * 0.05;
  grass.style.transform = `translateX(-${offset}px)`;
});

// fit top of mountain into frame
const mountain = document.querySelector(".mountain-bg");
mountain.style.transform = "translateY(100px)";
