const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", (event) => {
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
