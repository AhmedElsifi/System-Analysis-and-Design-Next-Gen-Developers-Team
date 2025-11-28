window.addEventListener("DOMContentLoaded", function () {
  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  let products = document.querySelectorAll(".card");
  if (products.length) {
    let cart = getCart();

    products.forEach(function (product) {
      let addButtons = product.querySelectorAll(".add-to-cart-flash");

      addButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          let cart = getCart();
          let productName = product
              .querySelector(".product-name")
              .textContent.trim(),
            productImgLink = product.querySelector("img").getAttribute("src"),
            productPriceText = product.querySelector(".price").textContent,
            productPriceNum = parseInt(productPriceText.replace(/[^0-9]/g, ""));
          let existingProduct = cart.find((p) => p.name === productName);

          if (existingProduct) {
            existingProduct.Quantity += 1;
          } else {
            let newProduct = {
              name: productName,
              img: productImgLink,
              price: productPriceNum,
              Quantity: 1,
            };
            cart.push(newProduct);
          }

          saveCart(cart);
          alert(`"${productName}" has been added to your cart.`);
        });
      });
    });
  }

  window.onload = function () {
    if (document.querySelector(".products-list")) {
      renderCart();
    }
  };

  function renderCart() {
    let containerDiv = document.querySelector(".products-list");
    containerDiv.innerHTML = ""; // Clear old content

    let cart = getCart();
    if (cart.length === 0) {
      containerDiv.innerHTML = "<h3>Your cart is empty 🛒</h3>";
      let totalDiv = document.querySelector(".cart-total");
      if (totalDiv) totalDiv.innerHTML = "";
      return;
    }
    let header = `
    <div class="products-header">
      <p class="first-head">Product</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
    </div>`;
    containerDiv.innerHTML = header;

    cart.forEach(function (product, index) {
      let htmlContent = `
      <div class="product" data-index="${index}">
        <div class="title-section">
          <button class="remove-item"><i class="fa-solid fa-x"></i></button>
          <img src="${product.img}" alt="product image" />
          <h4>${product.name}</h4>
        </div>
        <p class="price">$${product.price}</p>
        <input
          type="number"
          name="Quantity"
          class="quantity-selector"
          value="${product.Quantity}"
          min="0"
          max="100"
        />
        <p class="subtotal">$${product.price * product.Quantity}</p>
      </div>`;
      containerDiv.innerHTML += htmlContent;
    });

    updateTotal(cart);
    attachListeners();
  }
  function attachListeners() {
    let cart = getCart();
    document.querySelectorAll(".quantity-selector").forEach((input) => {
      input.addEventListener("change", function () {
        let productDiv = this.closest(".product");
        let index = parseInt(productDiv.dataset.index);
        let newQuantity = parseInt(this.value);

        if (isNaN(newQuantity)) return;

        if (newQuantity <= 0) {
          cart.splice(index, 1);
          saveCart(cart);
          renderCart();
        } else {
          cart[index].Quantity = newQuantity;
          saveCart(cart);
          productDiv.querySelector(".subtotal").textContent = `$${
            cart[index].price * newQuantity
          }`;
          updateTotal(cart);
        }
      });
    });

    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", function () {
        let productDiv = this.closest(".product");
        let index = parseInt(productDiv.dataset.index);
        if (!isNaN(index) && cart[index]) {
          cart[index].Quantity = 0;
          console.log(`Removed "${cart[index].name}" - quantity set to 0.`);
          saveCart(cart);
          cart.splice(index, 1);
          saveCart(cart);
          renderCart();
        }
      });
    });
  }

  let totalCheckOut;

  function updateTotal(cart) {
    let total = cart.reduce(
      (acc, product) => acc + product.price * product.Quantity,
      0
    );
    let totalElement = document.getElementById("cart-total-value");
    if (totalElement) {
      totalElement.textContent = `$${total}`;
    } else {
      let totalDiv = document.createElement("div");
      totalDiv.className = "cart-total";
      totalDiv.innerHTML = `<h3>Total: <span id="cart-total-value">$${total}</span></h3>`;
      document.querySelector(".container").appendChild(totalDiv);
    }
    totalCheckOut = total;
  }
  function checkedOut() {
    if (
      localStorage.getItem("cart") &&
      JSON.parse(localStorage.getItem("cart")).length > 0
    ) {
      alert(
        `Your order has been placed successfully! Please prepare $${totalCheckOut} in cash to pay upon delivery.`
      );
      localStorage.clear();
      window.location.href = "../index.html";
    } else {
      alert("Cart is empty!");
    }
  }
  window.checkedOut = checkedOut;
});
