const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  // Toggle the menu visibility
  mobileMenu.classList.toggle("open");

  // Toggle the animation for the menu icon
  menuToggle.classList.toggle("open");
});
