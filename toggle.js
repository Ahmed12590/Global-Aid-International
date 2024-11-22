const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  // Toggle the 'open' class for both menu and icon
  mobileMenu.classList.toggle("open");
  menuToggle.classList.toggle("open");
});
