// compost cycle animation using images
const images = [
  "images/food.png",
  "images/foodscraps.png",
  "images/compost.png",
  "images/fertilizer.png",
  "images/growth.png",
];

let index = 0;
const cycleImage = document.getElementById("cycleImage");

// smooth transition styling
cycleImage.style.transition =
  "opacity 1.5s ease-in-out, transform 1.2s ease-in-out";

function changeImage() {
  // fades out
  cycleImage.style.opacity = "0";
  cycleImage.style.transform = "scale(1.05)";

  setTimeout(() => {
    // switches to next image
    index = (index + 1) % images.length;
    cycleImage.src = images[index];

    // fades in
    cycleImage.style.opacity = "1";
    cycleImage.style.transform = "scale(1)";
  }, 1500);
}

setInterval(changeImage, 4000); // 4 seconds per stage

// scroll-triggered fade-in for compost cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".compost-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // keeps it visible
        }
      });
    },
    {
      threshold: 0.2, // threshold for when to make it visible
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
