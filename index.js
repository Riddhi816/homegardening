document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle-btn");
  const navLinks = document.querySelector(".nav-links");

  toggleButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  const carousel = document.getElementById("imageCarousel");
  const images = carousel.children;
  let index = 0;

  function showNextImage() {
    index = (index + 1) % images.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextImage, 3000); // Change image every 3 seconds

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productName = this.getAttribute("data-product");
      const imageUrl = this.getAttribute("data-image-url"); 
      addToCart(productName, imageUrl);
    });
  });
  function addToCart(productName, imageUrl) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let found = cart.find((item) => item.name === productName);
    if (found) {
      found.quantity += 1;
    } else {
      cart.push({ name: productName, image: imageUrl, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to your cart!");
  }
});
