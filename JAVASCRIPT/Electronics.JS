document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".heart-icon");
  hearts.forEach((heart) => {
    const id = heart.getAttribute("data-id");
    if (localStorage.getItem(id) === "liked") {
      heart.classList.add("fa-solid", "liked");
      heart.classList.remove("fa-regular");
    }
    else {
      heart.classList.add("fa-regular");
      heart.classList.remove("fa-solid", "liked");
    }
    heart.addEventListener("click", () => {
      heart.classList.toggle("fa-solid");
      heart.classList.toggle("fa-regular");
      heart.classList.toggle("liked");
      if (heart.classList.contains("liked")) {
        localStorage.setItem(id, "liked");
      } else {
        localStorage.removeItem(id); 
      }
    });
  });
});

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
searchInput.addEventListener("input", () => {
const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
    });
});

