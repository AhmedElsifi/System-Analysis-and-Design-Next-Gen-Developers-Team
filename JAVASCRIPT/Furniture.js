const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  products.forEach((product) => {
    const text = product.textContent.toLowerCase();
    if (text.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
