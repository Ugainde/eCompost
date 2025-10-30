// Optional: expand card on click for more info
const cards = document.querySelectorAll(".flip-card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
