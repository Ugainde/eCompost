// Smooth Compost Cycle Animation 🌱
const images = [
  "images/food.png",
  "images/foodscraps.png",
  "images/compost.png",
  "images/fertilizer.png",
  "images/growth.png",
];

let index = 0;
const cycleImage = document.getElementById("cycleImage");

// Apply smooth transition styles
cycleImage.style.transition =
  "opacity 1.5s ease-in-out, transform 1.2s ease-in-out";

function changeImage() {
  // Fade out smoothly
  cycleImage.style.opacity = "0";
  cycleImage.style.transform = "scale(1.05)";

  setTimeout(() => {
    // Change to next image mid-fade
    index = (index + 1) % images.length;
    cycleImage.src = images[index];

    // Fade back in smoothly
    cycleImage.style.opacity = "1";
    cycleImage.style.transform = "scale(1)";
  }, 1500); // halfway point in transition
}

// Start gentle looping
setInterval(changeImage, 4000); // 4 seconds per stage

// // Grass slide-in transition on load
// window.addEventListener("load", () => {
//   const grass = document.getElementById("grass");
//   grass.style.transform = "translateX(0)";
// });

// // Slight mountain shift for subtle motion
// window.addEventListener("DOMContentLoaded", () => {
//   const mountain = document.querySelector(".mountain");
//   mountain.style.transform = "translateX(20px)";
// });

// Scroll-triggered fade-in for compost cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".compost-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    {
      threshold: 0.2, // reveal when 20% visible
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
